'use strict'

let i = 0;
let image = [];
let slideTime = 5000;
let slider = document.querySelector('.header');

image[0] = '../img/slide-1.jpg';
image[1] = '../img/slide-2.jpg';
image[2] = '../img/slide-3.jpg';
image[3] = '../img/slide-4.jpg';


function changePicture() {
    slider.style.backgroundRepeat =  "no-repeat";
    slider.style.backgroundPosition = "100%";
    
    slider.style.backgroundImage = "linear-gradient(to right , #000000 30%, #00000057 50% 85%, #000000), url(" + image[i] + ")";
    slider.style.backgroundSize = 'cover';
    if (window.matchMedia("(max-width: 426px)").matches) {
        slider.style.backgroundImage = "linear-gradient(to right , #000000 20%, #00000057 50% 100%),url(" + image[i] + ")";
        slider.style.backgroundSize = 'cover';
        slider.style.backgroundPositionX = 'left,50%';
    } else if (window.matchMedia("(max-width: 1300px)").matches) {    
        slider.style.backgroundImage = "linear-gradient(to right , #000000 20%, #00000057 50% 85%, #000000) ,url(" + image[i] + ")";
        slider.style.backgroundSize = 'cover';
        slider.style.backgroundPositionX = 'left, 37%';
    } else if (window.matchMedia("(min-width: 1300px)").matches){
        slider.style.backgroundImage = "linear-gradient(to right , #000000 40%, #00000057 50% 85%, #000000), url(../img/url(" + image[i] + ")";
    }

    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}
window.onload = changePicture;



