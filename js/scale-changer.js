import { img } from './filterchanger.js';
import {filterStyle} from './slider.js';
const DEFAULT_SCALE_VALUE = '55%';
const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const stepScale = 25;
let scaleFactor = 0.55;
const scaleValue = document.querySelector('.scale__control--value');
const onScaleDownButtonClick = function () {
  let scaleNumber = Number(scaleValue.value.replace(/[^0-9]/g,''));
  scaleNumber = scaleNumber - stepScale;
  scaleValue.value = `${scaleNumber }%`;
  if (scaleNumber < 25) {
    scaleNumber = 25;
    scaleValue.value = `${scaleNumber }%`;
  }
  scaleFactor = scaleNumber / 100;
  img.setAttribute('style', `transform:scale(${scaleFactor})${filterStyle}`);
  return scaleFactor;
};
const onScaleUpButtonClick = function () {
  let scaleNumber = Number(scaleValue.value.replace(/[^0-9]/g,''));
  scaleNumber = scaleNumber + stepScale;
  scaleValue.value = `${scaleNumber }%`;
  if (scaleNumber >= 100) {
    scaleNumber = 100;
    scaleValue.value = `${scaleNumber }%`;
  }
  scaleFactor = scaleNumber / 100;
  img.setAttribute('style', `transform:scale(${scaleFactor})${filterStyle}`);
};

export {scaleDownButton, scaleUpButton, onScaleDownButtonClick, onScaleUpButtonClick, scaleValue, DEFAULT_SCALE_VALUE, scaleFactor};
