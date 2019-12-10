function gallery() {
  function changeImg(event) {
    Array.from(document.querySelectorAll('.realize-types__item')).forEach((elem) => {
      elem.classList.remove('active-tab')
    })
    event.target.classList.add('active-tab')

    let block = event.target.dataset.type
    Array.from(document.querySelectorAll('.realize-gallery')).forEach((elem)=>{
      elem.classList.remove('realize-gallery--active')

      if (elem.dataset.typeImg == block) {
        elem.classList.add('realize-gallery--active')
        let src = elem.querySelector('.realize__content-one-img').getAttribute('src')
        document.querySelector('.realize').setAttribute('style', 'background-image: url('+src+');')
      }
    })
  }

  Array.from(document.querySelectorAll('.realize-types__item')).forEach((elem) => {
    elem.addEventListener('click',changeImg)
  });
}

gallery();