import {img,filterChanger,filterList} from './filterchanger.js';
import {scaleDown, scaleUp, scaleLower, scaleUpper, scaleValue, DEFAULT_SCALE_VALUE} from './scale-changer.js';
import { form, sender } from './data-submit.js';
const body = document.querySelector('body');
const popup = document.querySelector('#upload-file');
const popupWindow = document.querySelector('.img-upload__overlay');
const commentText = document.querySelector('.text__description');
const pressEsc = (evt) => {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    popupWindow.classList.add('hidden');
    document.removeEventListener('keydown', pressEsc);}
  filterList.removeEventListener('change', filterChanger);
  scaleDown.removeEventListener('click', scaleLower);
  scaleUp.removeEventListener('click', scaleUpper);
};
const popupOpen = function () {

  popup.addEventListener('change', ()=>{
    img.setAttribute('style', 'transform:scale(0.55)');
    scaleValue.value = DEFAULT_SCALE_VALUE;
    popupWindow.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', pressEsc);
    filterList.addEventListener('change', filterChanger);
    scaleDown.addEventListener('click', scaleLower);
    scaleUp.addEventListener('click', scaleUpper);
    form.addEventListener('submit', sender);
  }
  );

};

const popupCloseButton = document.querySelector('.img-upload__cancel');
const popupClose = function (){
  popupCloseButton.addEventListener('click', (evt)=>{
    evt.preventDefault();
    popupWindow.classList.add('hidden');
    body.classList.remove('modal-open');
    popup.value = '';
    commentText.value = '';
    document.removeEventListener('keydown', pressEsc);
    filterList.removeEventListener('change', filterChanger);
    scaleDown.removeEventListener('click', scaleLower);
    scaleUp.removeEventListener('click', scaleUpper);
    form.removeEventListener('submit', sender);
    img.removeAttribute('class');
  }
  );
};
export{popupClose, popupOpen, pressEsc, commentText, popup};
