const photoContainer = document.querySelector('.pictures');
const field = document.querySelector('#picture').content;
const pictureField = field.querySelector('.picture');
const picWrapper = document.createDocumentFragment();
const miniatureGenerator = function (array) {
  for (let i = 0; i < array.length; i++) {
    const miniPic = pictureField.cloneNode(true);
    const url = miniPic.querySelector('.picture__img');
    const comments = miniPic.querySelector('.picture__comments');
    const likes = miniPic.querySelector('.picture__likes');
    url.src = array[i].url;
    url.alt = array[i].description;
    comments.insertAdjacentHTML('beforeend', array[i].comments);
    likes.insertAdjacentHTML('beforeend', array[i].likes);
    picWrapper.appendChild(miniPic);

  }
  photoContainer.appendChild(picWrapper);
};

export {miniatureGenerator};

