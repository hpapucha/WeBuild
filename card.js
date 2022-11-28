$(document).ready(function(){
    //initialise each canvas and fill with image
    let canvas = $(".image-column").find("canvas").toArray();
    canvas.forEach(c => {

        var context = c.getContext("2d");
        var img = new Image();
        img.src = $(c).data("image");
        img.onload = function () {
            context.drawImage(img, 0, 0, );
        };
    })


    $("input[type=text]").keyup(function(){
        let itsCanvas = $(this).closest(".image-column").find("canvas")[0]
        let name = $(this).closest(".inputs-wrapper").find("input[name='name']")[0].value
        let baname = $(this).closest(".inputs-wrapper").find("input[name='bname']")[0].value
        let addr = $(this).closest(".inputs-wrapper").find("input[name='address']")[0].value

        var context = itsCanvas.getContext("2d");
        console.log("redrawing canvas")

        context.clearRect(0, 0, itsCanvas.width, itsCanvas.height);
        var img = new Image();
        img.src = $(itsCanvas).data("image");

        var update = true;
        requestAnimationFrame(renderFunction);
        img.onload = () => update = true;

        function renderFunction(){
            if(update){  // only raw if needed
                update = false;
                context.drawImage(img, 0, 0);

                context.fillStyle = "black";
                context.font = "22px sans-serif";

                context.fillText(name, 20, 50);
                context.fillText(baname, 20, 100);
                context.fillText(addr, 20, 150);

            }
            requestAnimationFrame(renderFunction);
        }



    })

})