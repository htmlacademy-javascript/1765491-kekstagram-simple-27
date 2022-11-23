const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
import { showAlert } from './error-message-generator.js';
import { img, filterChanger, filterList } from './filterchanger.js';
import { scaleDown, scaleUp, scaleLower, scaleUpper} from './scale-changer.js';
import { pressEsc, commentText, popup } from './popupChanger.js';
import {successSend} from './send-message.js';
const sender = function (evt) {
  evt.preventDefault();
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
        overlay.classList.add('hidden');
        form.removeEventListener('submit', sender);
        successSend();
        document.removeEventListener('keydown', pressEsc);
        filterList.removeEventListener('change', filterChanger);
        scaleDown.removeEventListener('click', scaleLower);
        scaleUp.removeEventListener('click', scaleUpper);
        form.removeEventListener('submit', sender);
        popup.value = '';
        commentText.value = '';
        img.removeAttribute('class');
      }
      else {
        form.removeEventListener('submit', sender);
        overlay.classList.add('hidden');
        // successSend();
        document.removeEventListener('keydown', pressEsc);
        filterList.removeEventListener('change', filterChanger);
        scaleDown.removeEventListener('click', scaleLower);
        scaleUp.removeEventListener('click', scaleUpper);
        form.removeEventListener('submit', sender);
        img.removeAttribute('class');
        popup.value = '';
        commentText.value = '';
      }
    }
    )
    .catch(() => {
      overlay.classList.add('hidden');
      form.removeEventListener('submit', sender);
      // successSend();
      document.removeEventListener('keydown', pressEsc);
      filterList.removeEventListener('change', filterChanger);
      scaleDown.removeEventListener('click', scaleLower);
      scaleUp.removeEventListener('click', scaleUpper);
      form.removeEventListener('submit', sender);
      img.removeAttribute('class');
      popup.value = '';
      commentText.value = '';
    }
    );
};

export { form, sender };

