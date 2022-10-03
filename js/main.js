alert ('SCRIPT WORK'); //проверил что скрипт подключен и работает, привет ИЕ
let minNumber = 1;
let maxNumber = 100;
//функция ниже украдена отсюда https://dev-gang.ru/article/generacija-sluczainyh-czisel-s-vanilnym-js-9xozvi8tsm/
function randomGenerator (minNumber, maxNumber) {
  if (minNumber>=0&&maxNumber>1&&maxNumber>minNumber){
  let randomNumber = Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
  console.log (randomNumber);
  return randomNumber;}
  else alert('ERROR')
}
randomGenerator (minNumber, maxNumber) //вызвали рандомайзер. Диапазон задан переменными изначально (подозреваю что значения будут браться из инпутов, мне пока так логичнее), но можно вызывать со своими аргументами

//функция ниже проверяет длину строки
//переменные заданы явно (потому что значения брать неоткуда, да я и не умею)

let maxCommentLenght = 140; //условная длина строки
let commentLenght = 100; //как бы вытянули длину комментария с сайта(разметки?)
function commentCheck (commentLenght, maxCommentLenght) {
  if (commentLenght<=maxCommentLenght) {
    return true;
  }
  else {return false;}
}
let b=commentCheck (commentLenght, maxCommentLenght);//просто проверка функции с выводом в консоль
console.log('b='+b);
