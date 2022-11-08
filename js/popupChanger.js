const body = document.querySelector('body')
const popup = document.querySelector('#upload-file');
const popupWindow = document.querySelector('.img-upload__overlay');
const commentText = document.querySelector('.text__description');
const pressEsc = (evt) => {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    popupWindow.classList.add('hidden')
    document.removeEventListener('keydown', pressEsc)}
}
const popupOpen = function () {
  popup.addEventListener('change', (evt)=>{
    popupWindow.classList.remove('hidden')
    body.classList.add('modal-open')
    document.addEventListener('keydown', pressEsc)
  }
  )
}

const popupCloseButton = document.querySelector('.img-upload__cancel')
const popupClose = function (){
  popupCloseButton.addEventListener('click', (evt)=>{
    evt.preventDefault()
    popupWindow.classList.add('hidden')
    body.classList.remove('modal-open')
    popup.value = ''
    commentText.value = ''
    document.removeEventListener('keydown', pressEsc)
  }
  )
};
export{popupClose, popupOpen};
