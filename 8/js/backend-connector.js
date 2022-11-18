import {miniatureGenerator} from './miniature-generator.js';
import {showAlert} from './error-message-generator.js'

function getContent () {
  fetch ('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) =>response.json())
  .then((data) => {
    console.log(data)
    // getArray(test);
    miniatureGenerator(data);
  })
  .catch(() => {
    showAlert('Ошибка загрузки, попробуйте еще раз', "red");
  })
}
export{getContent}
