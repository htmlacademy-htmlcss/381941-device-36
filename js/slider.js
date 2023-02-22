let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main-slider-item");
  let dots = document.getElementsByClassName("main-slider-control-button");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}


let popupbutton = document.getElementsByClassName("open-popup"); 

popupbutton.onclick = function() {

    let popupbox = document.getElementsByClassName("delivery-popup");
    if (popupbox.style.display !== 'none') {
        popupbox.style.display = 'none';
    }
    else {
        popupbox.style.display = 'block';
    }
};