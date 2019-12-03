function gallery() {
  let arrTypes = []

  document.querySelectorAll('.realize-types__item').forEach((elem, index) => {
    arrTypes[index] = elem.dataset.type
  })


  function changeImg(event) {
    document.querySelectorAll('.realize-types__item').forEach((elem) => {
      elem.classList.remove('active-tab')
    })
    event.target.classList.add('active-tab')
    let block = event.target.dataset.type
  }

  document.querySelectorAll('.realize-types__item').forEach((elem) => {
    elem.addEventListener('click',changeImg)
  });
}

gallery();