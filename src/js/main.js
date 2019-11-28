var headerButton = document.querySelector('.header-footer__button');
var closeButton = document.querySelector('.leave-request-form-wrap-form__close-btn');
var  popupForm = document.querySelector('.leave-request-form--popup-form');


headerButton.onclick = function() {
  popupForm.classList.add('active-popup')
};

closeButton.onclick = function() {
  popupForm.classList.toggle('active-popup')
  return false
};

popupForm.onclick =function(event) {
  console.log(event.target.className)
  if (event.target.className == popupForm.className) {
    popupForm.classList.toggle('active-popup')
  }
}
