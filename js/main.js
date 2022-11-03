import {getArray} from './get-photo-properties.js';
import {miniatureGenerator} from './miniature-generator.js';
const test = [];
getArray(test, 15);
miniatureGenerator(test);


// const photoContainer = document.querySelector('.pictures')
// const Field = document.querySelector('#picture').content;
// const pictureField = Field.querySelector('.picture');
// console.log (pictureField);

// let miniatureGenerator = function () {
//   for (let i=0; i<test.length; i++) {
//     let miniPic = pictureField.cloneNode(true);
//     let url = miniPic.querySelector('.picture__img');
//     let comments = miniPic.querySelector('.picture__comments');
//     let likes = miniPic.querySelector('.picture__likes');
//     url.src = test[i].url;
//     url.alt = test[i].description;
//     comments.insertAdjacentHTML('beforeend', test[i].comments);
//     likes.insertAdjacentHTML('beforeend', test[i].likes);
//     console.log(miniPic);
//     photoContainer.appendChild(miniPic);
//   }
// };
// <template id="picture">
//     <a href="#" class="picture">
//       <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
//       <p class="picture__info">
//         <span class="picture__comments"></span>
//         <span class="picture__likes"></span>
//       </p>
//     </a>
//   </template>
