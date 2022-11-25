import {form, sendingData} from './data-submit.js';
import { onDocumentKeydown } from './popupChanger.js';
const succesMessage = document.querySelector('#success').content;
const successMessageContent = succesMessage.querySelector('.success');
const body = document.querySelector('body');
const errorMessage = document.querySelector('#error').content;
const errorMessageContent = errorMessage.querySelector('.error');

const onSuccessMessageKeydown = function (evt) {
  if (evt.key === 'Escape'){
    successMessageContent.remove();
    document.removeEventListener('keydown', onSuccessMessageKeydown);
    body.removeEventListener('click', overlaySuccesRemover);
  }
};

const onErrorMessageKeydown = function(evt) {
  if (evt.key === 'Escape'){
    errorMessageContent.remove();
    body.removeEventListener('keydown', onErrorMessageKeydown);
    body.removeEventListener('click', overlayErrorRemover);
  }
}

const overlaySuccesRemover = function(evt) {
  const div = document.querySelector('.success__inner');
  if (evt.target !== div) {
    successMessageContent.remove();
    body.removeEventListener('click', overlaySuccesRemover);
    document.removeEventListener('keydown', onSuccessMessageKeydown);
  }
};

const overlayErrorRemover = function(evt) {
  const div = document.querySelector('.error__inner');
  if (evt.target !== div) {
    errorMessageContent.remove();
    body.removeEventListener('click', overlayErrorRemover);
  }
};

const succesMessageRemove = function() {
  successMessageContent.remove();
  body.removeEventListener('click', overlaySuccesRemover);
  document.removeEventListener('keydown', onSuccessMessageKeydown);
};

const errorMessageRemove = function() {
  errorMessageContent.remove();
  body.removeEventListener('click', overlayErrorRemover);
};

const successSend = function () {
  body.appendChild(successMessageContent);
  document.removeEventListener('keydown', onDocumentKeydown);
  const button = document.querySelector('.success__button');
  button.addEventListener('click', succesMessageRemove);
  body.addEventListener('click', overlaySuccesRemover);
  document.addEventListener('keydown', onSuccessMessageKeydown);
  form.removeEventListener('submit', sendingData);
};

const errorSend = function() {
  body.appendChild(errorMessageContent);
  const button = document.querySelector('.error__button');
  button.addEventListener('click', errorMessageRemove);
  body.addEventListener('click', overlayErrorRemover);
  body.addEventListener('keydown', onErrorMessageKeydown);
};

export {successSend, errorSend};
