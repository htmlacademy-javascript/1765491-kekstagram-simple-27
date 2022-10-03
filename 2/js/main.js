//функция ниже украдена отсюда https://dev-gang.ru/article/generacija-sluczainyh-czisel-s-vanilnym-js-9xozvi8tsm/
function randomGenerator(minNumber, maxNumber) {
  if (minNumber >= 0 && maxNumber > 1 && maxNumber > minNumber) {
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    console.log(randomNumber);
    return randomNumber;
  }
}
randomGenerator(1, 200);

//функция ниже проверяет длину строки

function commentCheck(commentLenght, maxCommentLenght) {
  if (commentLenght <= maxCommentLenght) {
    return true;
  }
  else { return false; }
}
commentCheck(100, 140);
