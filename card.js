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
        let nameHard = "Name";
        let companyHard = "Company";
        let locationHard = "Address";
        let phoneHard = "Phone";
        let baname = $(this).closest(".inputs-wrapper").find("input[name='bname']")[0].value
        let addr = $(this).closest(".inputs-wrapper").find("input[name='address']")[0].value
        let phone = $(this).closest(".inputs-wrapper").find("input[name='phone']")[0].value

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

                context.fillStyle = "#28282B";
                context.font = "20px imperial";
                
                
                context.fillText(nameHard, 20, 25);
                context.fillText(name, 40, 50);
                context.fillText(companyHard, 20, 75);
                context.fillText(baname, 40, 100);
                context.fillText(locationHard, 20, 150);
                context.fillText(addr, 40, 175);
                context.fillText(phoneHard, 20, 200);
                context.fillText(phone, 40, 225);
                

            }
            requestAnimationFrame(renderFunction);
        }



    })

})