import { removeOverlayError, removeOverlaySucces } from './send-message.js';
import { body } from './send-message.js';
import { openPopup, popup } from './popupChanger.js';


const deleteBodySuccessListener = function () {
  body.removeEventListener('click', removeOverlayError);
};


const deleteBodyErrorListener = function () {
  body.removeEventListener('click', removeOverlaySucces);
};

const openPopupWindow = function () {
  popup.addEventListener('change', openPopup);
};

export {deleteBodyErrorListener, deleteBodySuccessListener, openPopupWindow};


// popup.addEventListener('change', openPopup);
