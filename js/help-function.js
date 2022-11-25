import { overlayErrorRemover, overlaySuccesRemover } from './send-message.js';
import { body } from './send-message.js';


const removerBodySuccessListener = function () {
  body.removeEventListener('click', overlayErrorRemover);
};


const removerBodyErrorListener = function () {
  body.removeEventListener('click', overlaySuccesRemover);
};

export {removerBodyErrorListener, removerBodySuccessListener};
