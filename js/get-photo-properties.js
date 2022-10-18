import {getComment} from './comment-generator.js';
import {randomGenerator} from './generators.js';
//ниже функция для генерации объекта с (массив,количество_элементов)
function getArray(array, count) {
  for (let j = 0; j < count; j++) {
    array[j] = {
      id: j + 1,
      likes: randomGenerator(15, 200),
      comments: randomGenerator(0, 200),
      url: `photos/${j + 1}.jpg`,
      description: getComment()
    };
  }
  return array;
}

export {getArray};
