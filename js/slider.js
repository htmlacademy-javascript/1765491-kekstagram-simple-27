import { scaleFactor } from './scale-changer.js';
const sliderWrapper = document.querySelector('.effect-level__slider');
const imgWrapper = document.querySelector('.img-upload__preview');
const img = imgWrapper.querySelector('img');
const filterList = document.querySelector('.effects__list');
let filterStyle = ' ';
let filter;
let filterValue;
const effectLevelValue = document.querySelector('.effect-level__value');

function filterApply (evt) {
  if (evt.target.matches('input[id="effect-none"]')){
    sliderWrapper.setAttribute('disabled', true);
    effectLevelValue.setAttribute('value','');
    filterStyle = ' ';
    img.setAttribute('style', `transform:scale(${scaleFactor})${filterStyle}`);
  }

  if (evt.target.matches('input[id="effect-chrome"]')){
    sliderWrapper.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start:1,
      step: 0.1
    });
    filter = 'grayscale';
    sliderWrapper.removeAttribute('disabled', true);
    sliderWrapper.noUiSlider.on('update', () => {
      filterValue = sliderWrapper.noUiSlider.get();
      effectLevelValue.setAttribute('value',`${filterValue}`);
      filterStyle = `; filter:${filter}(${filterValue})`;
      img.setAttribute('style', `transform:scale(${scaleFactor})${filterStyle}`);
    });
  }

  if (evt.target.matches('input[id="effect-sepia"]')){
    sliderWrapper.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start:1,
      step: 0.1
    });
    filter = 'sepia';
    sliderWrapper.removeAttribute('disabled', true);
    sliderWrapper.noUiSlider.on('update', () => {
      filterValue = sliderWrapper.noUiSlider.get();
      effectLevelValue.setAttribute('value',`${filterValue}`);
      filterStyle = `; filter:${filter}(${filterValue})`;
      img.setAttribute('style', `transform:scale(${scaleFactor})${filterStyle}`);
    });
  }

  if (evt.target.matches('input[id="effect-marvin"]')){
    sliderWrapper.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start:100,
      step: 1
    });
    filter = 'invert';
    sliderWrapper.removeAttribute('disabled', true);
    sliderWrapper.noUiSlider.on('update', () => {
      filterValue = sliderWrapper.noUiSlider.get();
      effectLevelValue.setAttribute('value',`${filterValue}%`);
      filterStyle = `; filter:${filter}(${filterValue}%)`;
      img.setAttribute('style', `transform:scale(${scaleFactor})${filterStyle}`);
    });
  }

  if (evt.target.matches('input[id="effect-phobos"]')){
    sliderWrapper.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start:3,
      step: 0.1
    });
    filter = 'blur';
    sliderWrapper.removeAttribute('disabled', true);
    sliderWrapper.noUiSlider.on('update', () => {
      filterValue = sliderWrapper.noUiSlider.get();
      effectLevelValue.setAttribute('value',`${filterValue}px`);
      filterStyle = `; filter:${filter}(${filterValue}px)`;
      img.setAttribute('style', `transform:scale(${scaleFactor})${filterStyle}`);
    });
  }

  if (evt.target.matches('input[id="effect-heat"]')){
    sliderWrapper.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start:3,
      step: 0.1
    });
    filter = 'brightness';
    sliderWrapper.removeAttribute('disabled', true);
    sliderWrapper.noUiSlider.on('update', () => {
      filterValue = sliderWrapper.noUiSlider.get();
      effectLevelValue.setAttribute('value',`${filterValue}`);
      filterStyle = `; filter:${filter}(${filterValue})`;
      img.setAttribute('style', `transform:scale(${scaleFactor})${filterStyle}`);
    });
  }

}


const startSlider = function () {
  sliderWrapper.setAttribute('disabled', true);
  noUiSlider.create(sliderWrapper, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });
  filterList.addEventListener('change', filterApply);
};


export{startSlider, filterStyle};
