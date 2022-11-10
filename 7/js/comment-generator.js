import {randomGenerator} from './generators.js';
//ниже хранилище заготовленных комментов
const descriptionContainer = ['Black cat photo', 'Orange cat photo', 'White cat photo'];
//ниже - получаем случайный комментарий из массива строк
function getComment() {
  return descriptionContainer[randomGenerator(0, descriptionContainer.length - 1)];
}
export {getComment};
