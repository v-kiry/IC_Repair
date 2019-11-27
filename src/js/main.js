var headerButton = document.querySelectorAll('.header-footer__button')[0];
var closeButton = document.querySelectorAll('.leave-request-form-wrap-form__close-btn')[0];
console.log(headerButton)
var  popupForm = document.querySelectorAll('.leave-request-form--popup-form')[0];
headerButton.onclick = function() {
  popupForm.classList.add('active-popup')
};

closeButton.onclick = function() {
  popupForm.classList.toggle('active-popup')
};