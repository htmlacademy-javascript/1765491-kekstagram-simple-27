import {getArray} from './get-photo-properties.js';
import {miniatureGenerator} from './miniature-generator.js';
import {popupClose, popupOpen} from './popupChanger.js';
const test = [];
getArray(test, 19);
miniatureGenerator(test);
popupClose();
popupOpen();
