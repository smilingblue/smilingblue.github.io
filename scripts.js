var current = 0;
var slides = document.getElementsByClassName("slide");

console.log(slides.length);

setInterval(function() {

 for (var i = 0; i < slides.length; i++) {
   slides[i].style.opacity = 0;
 }

 if (current != slides.length - 1) {
   current = current + 1;
 } else {
   current = 0;
 }

 slides[current].style.opacity = 1;

}, 1000);
