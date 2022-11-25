const photoContainer = document.querySelector('.pictures');
const field = document.querySelector('#picture').content;
const pictureField = field.querySelector('.picture');
const picWrapper = document.createDocumentFragment();
const generatePhotos = function (images) {
  for (let i = 0; i < images.length; i++) {
    const miniPic = pictureField.cloneNode(true);
    const url = miniPic.querySelector('.picture__img');
    const comments = miniPic.querySelector('.picture__comments');
    const likes = miniPic.querySelector('.picture__likes');
    url.src = images[i].url;
    url.alt = images[i].description;
    comments.insertAdjacentHTML('beforeend', images[i].comments);
    likes.insertAdjacentHTML('beforeend', images[i].likes);
    picWrapper.appendChild(miniPic);

  }
  photoContainer.appendChild(picWrapper);
};

export {generatePhotos};

