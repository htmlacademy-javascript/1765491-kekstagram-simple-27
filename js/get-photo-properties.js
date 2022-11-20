import {getComment} from './comment-generator.js';
//ниже функция для генерации объекта с (массив,количество_элементов)
function getArray(array, count) {
  for (let j = 0; j < count; j++) {
    array[j] = {
      id: j + 1,
      likes: array[j],
      comments: array[j],
      url: `photos/${j + 1}.jpg`,
      description: getComment()
    };
  }
  return array;
}

export {getArray};
