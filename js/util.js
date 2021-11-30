
// Возвращает случайное число в диапазоне включительно
const getRandomInt = (min, max) => {

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

// Возвращает случайное число в диапазоне включительно с фиксированным
// значением после запятой
const getRandomFloor = (min, max, count = 5) => {

  if (max < min) {
    [min, max] = [max, min];
  }

  const x = Math.random() * (max - min + 1) + min;

  return x.toFixed(count);
}

const getRandomArr = (arr) => {
  let arrays = [];

  let max = getRandomInt(1, arr.length);

  for (let i = 0; i < max; i++) {
    arrays.push(arr[i]);
  }

  return arrays;
}

const getRussianType = (type) => {
  switch (type) {
    case 'flat':

      return 'Квартира';
    case 'bungalow':

      return 'Бунгало';
    case 'house':

      return 'Дом';
    case 'palace':

      return 'Дворец';
  }
}

export {getRandomInt, getRandomFloor, getRandomArr, getRussianType};
