var headerButton = document.querySelector('.header-footer__button');
var closeButton = document.querySelector('.leave-request-form-wrap-form__close-btn');
var popupForm = document.querySelector('.leave-request-form--popup-form');


headerButton.onclick = function() {
  popupForm.classList.add('active-popup')
};

closeButton.onclick = function() {
  popupForm.classList.remove('active-popup')
  return false
};

popupForm.onclick =function(event) {
  if (event.target.className == popupForm.className) {
    popupForm.classList.remove('active-popup')
  }
}

var burgerButton = document.querySelector('.header-footer__burger')
var burgerMenu = document.querySelector('.burger-menu')

document.onclick = function (event) {

  if (event.target.className == burgerButton.className) {
    burgerMenu.classList.toggle('burger-active')
  } else if (event.target.className != burgerMenu.className) {
    burgerMenu.classList.remove('burger-active')
  }
}