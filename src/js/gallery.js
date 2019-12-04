function gallery() {
  function changeImg(event) {
    document.querySelectorAll('.realize-types__item').forEach((elem) => {
      elem.classList.remove('active-tab')
    })
    event.target.classList.add('active-tab')

    let block = event.target.dataset.type
    document.querySelectorAll('.realize__content-img').forEach((elem)=>{
      elem.classList.add('visually-hidden')
      if (elem.dataset.typeImg == block) {
        elem.classList.remove('visually-hidden')
      }
    })
  }

  document.querySelectorAll('.realize-types__item').forEach((elem) => {
    elem.addEventListener('click',changeImg)
  });
}

gallery();