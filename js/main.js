//функция ниже украдена отсюда https://dev-gang.ru/article/generacija-sluczainyh-czisel-s-vanilnym-js-9xozvi8tsm/
function randomGenerator(minNumber, maxNumber) {
  if (minNumber >= 0 && maxNumber > 1 && maxNumber > minNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }
  return NaN;  
}
randomGenerator(1, 200);

//функция ниже проверяет длину строки

function commentCheck(commentLenght, maxCommentLenght) {
  return commentLenght <= maxCommentLenght
}
commentCheck(100, 140)


let descriptionContainer = ["Black cat photo", "Orange cat photo", "White cat photo"];
//ниже - получаем случайный комментарий из массива строк
function getComment() {
  return descriptionContainer[randomGenerator(0,descriptionContainer.length-1)]
}
//ниже функция для генерации объекта с (массив,количество_элементов)
function getArray (array,count) {
  for (let j=0; j<count; j++) {
    array[j]={
      id:j+1, 
      likes:randomGenerator(15,200),
      comments:randomGenerator(0,200),
      url:`photos/${j+1}.jpg`,
      description:getComment()
      };
    }
  return array;
}

let test = [];
getArray (test,25);
console.log(test)
