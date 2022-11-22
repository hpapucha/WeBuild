// var text_title ="Overlay text";
// var imageLoader = document.getElementById('imageLoader1');
//     imageLoader.addEventListener('change1', handleImage, false);
// var canvas = document.getElementById('imageCanvas1');
// var ctx = canvas.getContext('2d');
// var img = new Image();
// img.crossOrigin="anonymous1";

// window.addEventListener('load1', DrawPlaceholder)

// function DrawPlaceholder() {
//     img.onload = function() {
//         DrawOverlay(img);
//         DrawText();
//         DynamicText(img)
//     };
//     img.src = 'https://unsplash.it/400/400/?random';
  
// }
// function DrawOverlay(img) {
//     ctx.drawImage(img,0,0);
//     ctx.fillStyle = 'rgba(30, 144, 255, 0.4)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
// }
// function DrawText() {
//     ctx.fillStyle = "white";
//     ctx.textBaseline = 'middle';
//     ctx.font = "50px 'Montserrat'";
//     ctx.fillText(text_title, 50, 50);
// }
// function DynamicText(img) {
//   document.getElementById('name1').addEventListener('keyup', function() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     DrawOverlay(img);
//     DrawText(); 
//     text_title = this.value;
//     ctx.fillText(text_title, 50, 50);
//   });
// }
// function handleImage(e) {
//     var reader = new FileReader();
//     var img = "";
//     var src = "";
//     reader.onload = function(event) {
//         img = new Image();
//         img.onload = function() {
//             canvas.width = img.width;
//             canvas.height = img.height;
//             ctx.drawImage(img,0,0);
//         }
//         img.src = event.target.result;
//         src = event.target.result;
//         canvas.classList.add("show1");
//         DrawOverlay(img);
//         DrawText(); 
//         DynamicText(img);   
//     }

//     reader.readAsDataURL(e.target.files[0]); 
 
// }
// function convertToImage() {
// 	window.open(canvas.toDataURL('png1'));
// }
// document.getElementById('download1').onclick = function download() {
// 		convertToImage();
// }


