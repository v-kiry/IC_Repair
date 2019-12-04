function main () {
  const headerButton = document.querySelector('.header-footer__button');
  const closeButton = document.querySelector('.leave-request-form-wrap-form__close-btn');
  const popupForm = document.querySelector('.leave-request-form--popup-form');


  headerButton.onclick = () => {
    popupForm.classList.add('active-popup')
  };

  closeButton.onclick = () => {
    popupForm.classList.remove('active-popup')
    return false
  };

  popupForm.onclick = (event) => {
    if (event.target.className == popupForm.className) {
      popupForm.classList.remove('active-popup')
    }
  }

  const burgerButton = document.querySelector('.header-footer__burger')
  const burgerMenu = document.querySelector('.header-footer__container--popup')
  const burgerElem = Array.from(document.querySelectorAll('.header-footer__burger-item'))

  document.onclick = (event) => {
    if (event.target.className == (burgerButton.className || 'active-burger' || 'active-burger-menu')) {
      burgerMenu.classList.toggle('active-burger-menu')
      burgerElem.forEach((item) => {
        item.classList.toggle('active-burger')
      })
    } else if (event.target.className != burgerMenu.className) {
      burgerMenu.classList.remove('active-burger-menu')
      burgerElem.forEach((item) => {
        item.classList.remove('active-burger')
      })
    }
  }

  const scrollButton = document.querySelector('.banner-scroll-btn')

  scrollButton.onclick = (event) => {
    let block = event.target.dataset.scrollTo
    document.querySelector('.' + block).scrollIntoView({ behavior: 'smooth'});
  }
}
main();
