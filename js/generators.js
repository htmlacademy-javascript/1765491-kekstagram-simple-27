//функция ниже украдена отсюда https://dev-gang.ru/article/generacija-sluczainyh-czisel-s-vanilnym-js-9xozvi8tsm/
function randomGenerator(minNumber, maxNumber) {
  if (minNumber >= 0 && maxNumber > 1 && maxNumber > minNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }
  return NaN;
}
export {randomGenerator};
