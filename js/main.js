import {popupClose, popupOpen} from './popupChanger.js';
import { startSlider } from './slider.js';
import{getContent} from './backend-connector.js';
import {successSend} from './send-message.js';
popupClose();
popupOpen();
startSlider();
getContent();
// successSend();