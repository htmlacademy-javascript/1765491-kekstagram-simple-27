const sliderWrapper = document.querySelector('.effect-level__slider')

const startSlider = function () {
  noUiSlider.create(sliderWrapper, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
}



startSlider()
