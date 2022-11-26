import {img,chooseFilter,filterList} from './filterchanger.js';
import {scaleDownButton, scaleUpButton, onScaleDownButtonClick, onScaleUpButtonClick, scaleValue, DEFAULT_SCALE_VALUE} from './scale-changer.js';
import { form, sendingData } from './data-submit.js';
import {onErrorMessageKeydown} from './send-message.js';
import { openPopupWindow } from './help-function.js';
const body = document.querySelector('body');
const popup = document.querySelector('#upload-file');
const popupWindow = document.querySelector('.img-upload__overlay');
const commentText = document.querySelector('.text__description');
const popupCloseButton = document.querySelector('.img-upload__cancel');

const onDocumentKeydown = function (evt) {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    popupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
    filterList.removeEventListener('change', chooseFilter);
    scaleDownButton.removeEventListener('click', onScaleDownButtonClick);
    scaleUpButton.removeEventListener('click', onScaleUpButtonClick);
    body.classList.remove('modal-open');
    openPopupWindow();
    body.removeEventListener('keydown', onErrorMessageKeydown);
    popup.value = '';
    commentText.value = '';
  }
};

const closePopup = function (evt) {
  evt.preventDefault();
  popupWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  popup.value = '';
  commentText.value = '';
  openPopupWindow();
  document.removeEventListener('keydown', onDocumentKeydown);
  filterList.removeEventListener('change', chooseFilter);
  scaleDownButton.removeEventListener('click', onScaleDownButtonClick);
  scaleUpButton.removeEventListener('click', onScaleUpButtonClick);
  form.removeEventListener('submit', sendingData);
  img.removeAttribute('class');
  popupCloseButton.removeEventListener('click', closePopup);
};

const openPopup = function () {
  img.setAttribute('style', 'transform:scale(0.55)');
  scaleValue.value = DEFAULT_SCALE_VALUE;
  popupWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  filterList.addEventListener('change', chooseFilter);
  scaleDownButton.addEventListener('click', onScaleDownButtonClick);
  scaleUpButton.addEventListener('click', onScaleUpButtonClick);
  form.addEventListener('submit', sendingData);
  popupCloseButton.addEventListener('click', closePopup);
  popup.removeEventListener('change', openPopup);
};

const openImageUploadPopup = function () {
  popup.addEventListener('change', openPopup);};

export{onDocumentKeydown, commentText, popup, openPopup, openImageUploadPopup};
