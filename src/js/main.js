'use strict'


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 300) { 
      document.body.classList.add('animate-bg-image');
      document.body.classList.add('animate-bg-image-2');
    }
});


const secondImage = document.querySelector('.quote');
const secondImagePosition = secondImage.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  
  if (scrollPosition > secondImagePosition) {
    secondImage.classList.add('animate-bg-image-2');
  }
});




let headerButton = document.querySelector('.header__btn');
headerButton.addEventListener('click', function() {
  window.location = '#sign-up';
});


const form = document.querySelector('.form__form');
const emailInput = document.querySelector('#email');
const emailMessage = document.querySelector('#email-message');
const submitBtn = document.querySelector('.form__submit-btn');
const successMessage = 'Thank you for subscribing!';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validateEmail(emailInput.value)) {
    emailMessage.textContent = 'Please enter a valid email address';
    return;
  }

  replaceForm();
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function replaceForm() {
  const formContainer = document.querySelector('.form__form');
  const successMessageEl = document.createElement('p');
  successMessageEl.textContent = successMessage;
  successMessageEl.classList.add('form__success-message');
  formContainer.replaceWith(successMessageEl);
}





