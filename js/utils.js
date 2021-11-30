const getRandom = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min){
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

const getCountPoint = (min, max, count) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min){
    [min, max] = [max, min];
  }

  let floor = Math.random() * (max - min) + min;

  return floor.toFixed(count);
};

const getRandomArray = (array) => {

  return array[getRandom(0, array.length - 1)];
};

const getRandomArraysCount = (arrays) => {
  let array = [];

  for(let i = 0; i < getRandom(1, arrays.length - 1); i++){
    array.push(arrays[i]);
  }

  return array;
};

export { getRandom, getCountPoint, getRandomArray, getRandomArraysCount };
