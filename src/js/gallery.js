'use strict'

const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
let currentIndex;


images.forEach((img, index) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        console.log(imgSrc);
        currentIndex = index;
        imgModal(imgSrc);
    });
});

var lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: PhotoSwipe 
});
lightbox.init();
const showAllBtn = document.getElementById("show-all-btn");
const hiddenImages = document.querySelectorAll(".gallery__img--hidden"); 



showAllBtn.addEventListener("click", () => {
  hiddenImages.forEach((img) => {
    img.classList.remove("gallery__img--hidden");
  });
  showAllBtn.style.display = "none";
});


