const form = document.querySelector('.img-upload__form')
const overlay = document.querySelector('.img-upload__overlay')
import { showAlert } from "./error-message-generator.js"
import { img, filterChanger, filterList } from './filterchanger.js';
import { scaleDown, scaleUp, scaleLower, scaleUpper, scaleValue, DEFAULT_SCALE_VALUE } from './scale-changer.js';
import { pressEsc, commentText, popup } from "./popupChanger.js";
const sender = function (evt) {
  evt.preventDefault()
  const formData = new FormData(evt.target);
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => {
      if (response.ok) {
        overlay.classList.add('hidden')
        form.removeEventListener('submit', sender)
        showAlert('Успешно', "green");
        document.removeEventListener('keydown', pressEsc)
        filterList.removeEventListener('change', filterChanger)
        scaleDown.removeEventListener('click', scaleLower)
        scaleUp.removeEventListener('click', scaleUpper)
        form.removeEventListener('submit', sender)
        popup.value = ''
    commentText.value = ''
        img.removeAttribute('class')
      }
      else {
        form.removeEventListener('submit', sender)
        overlay.classList.add('hidden')
        showAlert('Ошибка загрузки, попробуйте еще раз', "red");
        document.removeEventListener('keydown', pressEsc)
        filterList.removeEventListener('change', filterChanger)
        scaleDown.removeEventListener('click', scaleLower)
        scaleUp.removeEventListener('click', scaleUpper)
        form.removeEventListener('submit', sender)
        img.removeAttribute('class')
        popup.value = ''
    commentText.value = ''
      }
    }
    )
    .catch(() => {
      overlay.classList.add('hidden')
      form.removeEventListener('submit', sender)
      showAlert('Ошибка загрузки, попробуйте еще раз', "red")
      document.removeEventListener('keydown', pressEsc)
      filterList.removeEventListener('change', filterChanger)
      scaleDown.removeEventListener('click', scaleLower)
      scaleUp.removeEventListener('click', scaleUpper)
      form.removeEventListener('submit', sender)
      img.removeAttribute('class')
      popup.value = ''
    commentText.value = ''
    }
    )
}

export { form, sender }

