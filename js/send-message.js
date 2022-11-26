import {form, sendingData} from './data-submit.js';
import { onDocumentKeydown } from './popupChanger.js';
import { deleteBodyErrorListener, deleteBodySuccessListener } from './help-function.js';
const succesMessage = document.querySelector('#success').content;
const successMessageContent = succesMessage.querySelector('.success');
const body = document.querySelector('body');
const errorMessage = document.querySelector('#error').content;
const errorMessageContent = errorMessage.querySelector('.error');

const onSuccessMessageKeydown = function (evt) {
  if (evt.key === 'Escape'){
    successMessageContent.remove();
    document.removeEventListener('keydown', onSuccessMessageKeydown);
    deleteBodyErrorListener();
  }
};

const onErrorMessageKeydown = function(evt) {
  if (evt.key === 'Escape'){
    errorMessageContent.remove();
    body.removeEventListener('keydown', onErrorMessageKeydown);
    deleteBodySuccessListener();
  }
};

const removeOverlaySucces = function(evt) {
  const div = document.querySelector('.success__inner');
  if (evt.target !== div) {
    successMessageContent.remove();
    body.removeEventListener('click', removeOverlaySucces);
    document.removeEventListener('keydown', onSuccessMessageKeydown);
  }
};

const removeOverlayError = function(evt) {
  const div = document.querySelector('.error__inner');
  if (evt.target !== div) {
    errorMessageContent.remove();
    document.removeEventListener('keydown', onSuccessMessageKeydown);
    body.removeEventListener('click', removeOverlayError);

  }
};

const succesMessageRemove = function() {
  successMessageContent.remove();
  body.removeEventListener('click', removeOverlaySucces);
  document.removeEventListener('keydown', onSuccessMessageKeydown);
};

const errorMessageRemove = function() {
  errorMessageContent.remove();
  body.removeEventListener('click', removeOverlayError);
  body.removeEventListener('keydown', onErrorMessageKeydown);
};

const sendSucces = function () {
  body.appendChild(successMessageContent);
  document.removeEventListener('keydown', onDocumentKeydown);
  const button = document.querySelector('.success__button');
  button.addEventListener('click', succesMessageRemove);
  body.addEventListener('click', removeOverlaySucces);
  document.addEventListener('keydown', onSuccessMessageKeydown);
  form.removeEventListener('submit', sendingData);
};

const sendError = function() {
  body.appendChild(errorMessageContent);
  const button = document.querySelector('.error__button');
  button.addEventListener('click', errorMessageRemove);
  body.addEventListener('click', removeOverlayError);
  body.addEventListener('keydown', onErrorMessageKeydown);
};

export {sendSucces, sendError, removeOverlayError, body, removeOverlaySucces, onErrorMessageKeydown};
