const MIN_PRICE_HOUSE = 5000;
const MIN_PRICE_FLAT = 1000;
const MIN_PRICE_BUNGALOW = 0;
const MIN_PRICE_PALACE = 10000;

const price = document.querySelector('#price');

// const form = document.querySelector('.ad-form');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const form = document.querySelector('.ad-form');

const checkAdFormTimes = (target) => {
  switch (target.id) {
    case timeIn.id:
      timeOut.value = timeIn.value;
      break;
    case timeOut.id:
      timeIn.value = timeOut.value;
      break;
  }
};

form.addEventListener('change', (evt) => {

  if (evt.target.value === 'house') {
    price.placeholder = MIN_PRICE_HOUSE;

    price.value = '';

    price.min = MIN_PRICE_HOUSE;
  } else if (evt.target.value === 'flat') {
    price.placeholder = MIN_PRICE_FLAT;

    price.value = '';

    price.min = MIN_PRICE_FLAT;
  } else if (evt.target.value === 'bungalow') {
    price.placeholder = MIN_PRICE_BUNGALOW;

    price.value = '';

    price.min = MIN_PRICE_BUNGALOW;
  } else if (evt.target.value === 'palace') {
    price.placeholder = MIN_PRICE_PALACE;

    price.value = '';

    price.min = MIN_PRICE_PALACE;
  }

  checkAdFormTimes(evt.target);
});
