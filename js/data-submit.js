const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
import { img, chooseFilter, filterList } from './filterchanger.js';
import { scaleDownButton, scaleUpButton, onScaleDownButtonClick, onScaleUpButtonClick} from './scale-changer.js';
import { onDocumentKeydown, commentText, popup, openPopup } from './popupChanger.js';
import {sendSucces, sendError} from './send-message.js';
const sendingData = function (evt) {
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
        sendSucces();
        body.classList.remove('modal-open');
        filterList.removeEventListener('change', chooseFilter);
        scaleDownButton.removeEventListener('click', onScaleDownButtonClick);
        scaleUpButton.removeEventListener('click', onScaleUpButtonClick);
        popup.value = '';
        commentText.value = '';
        img.removeAttribute('class');
        popup.addEventListener('change', openPopup);
      }
      else {
        sendError();
      }
    }
    )
    .catch(() => {
      document.removeEventListener('keydown', onDocumentKeydown);
      sendError();
    }
    );
};

export { form, sendingData };

