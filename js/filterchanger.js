const imgWrapper = document.querySelector('.img-upload__preview');
const img = imgWrapper.querySelector('img');
const filterList = document.querySelector('.effects__list');
function filterChanger (evt) {
  const classli = evt.target.value;
  if (evt.target.matches('input[type="radio"]')){
    img.removeAttribute('class');
    img.classList.add(`effects__preview--${ classli}`);
  }
}
export{img,filterChanger,filterList};
