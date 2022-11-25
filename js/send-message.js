import {form, sendingData} from './data-submit.js';
import { onDocumentKeydown } from './popupChanger.js';
import { removerBodyErrorListener, removerBodySuccessListener } from './help-function.js';
const succesMessage = document.querySelector('#success').content;
const successMessageContent = succesMessage.querySelector('.success');
const body = document.querySelector('body');
const errorMessage = document.querySelector('#error').content;
const errorMessageContent = errorMessage.querySelector('.error');

const onSuccessMessageKeydown = function (evt) {
  if (evt.key === 'Escape'){
    successMessageContent.remove();
    document.removeEventListener('keydown', onSuccessMessageKeydown);
    removerBodyErrorListener();
  }
};

const onErrorMessageKeydown = function(evt) {
  if (evt.key === 'Escape'){
    errorMessageContent.remove();
    body.removeEventListener('keydown', onErrorMessageKeydown);
    removerBodySuccessListener();
  }
};

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

const sendSucces = function () {
  body.appendChild(successMessageContent);
  document.removeEventListener('keydown', onDocumentKeydown);
  const button = document.querySelector('.success__button');
  button.addEventListener('click', succesMessageRemove);
  body.addEventListener('click', overlaySuccesRemover);
  document.addEventListener('keydown', onSuccessMessageKeydown);
  form.removeEventListener('submit', sendingData);
};

const sendError = function() {
  body.appendChild(errorMessageContent);
  const button = document.querySelector('.error__button');
  button.addEventListener('click', errorMessageRemove);
  body.addEventListener('click', overlayErrorRemover);
  body.addEventListener('keydown', onErrorMessageKeydown);
};

export {sendSucces, sendError, overlayErrorRemover, body, overlaySuccesRemover};
