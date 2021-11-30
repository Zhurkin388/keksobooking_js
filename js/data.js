import { getRandomInt, getRandomFloor, getRandomArr } from './util.js';

const COUNT_AUTHORS = 8;
const COUNT_OFFERS = 10;

const Title = [
  'Baltic boutique hotel',
  'Margarita Hotel',
  'Бутик Отель Северный Цветок',
  'Отель БАГРАТИОН',
  'Бутик-отель «1852»',
];

const Description = [
  'Бутик-отель «Балтийский» расположен в Санкт-Петербурге, в 700 метрах от музея Анны Ахматовой и в 1,3 км от музея Фаберже.',
  'Стойка регистрации открыта круглосуточно',
  'В этом 4-звездочном отеле предлагаются услуги туристического бюро и билетной кассы.',
  'В распоряжении гостей бар и бесплатный Wi-Fi на всей территории.',
  'В числе удобств всех номеров — письменный стол, телевизор с плоским экраном',
];

const Location = {
  x: getRandomFloor(35.65000, 35.70000),
  y: getRandomFloor(139.70000, 139.80000),
};

const Type = ['palace', 'flat', 'house', 'bungalow'];

const Tymes = ['12:00', '13:00', '14:00'];

const Features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const Photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const addAuthor = (i) => {
  const author = [];

  author.push({
    id: i,
    avatar: `img/avatars/user0${getRandomInt(1, COUNT_AUTHORS)}.png`,
  });

  return author;
};

const offers = [];

const addOffer = () => {
  for (let i = 0; i < COUNT_OFFERS; i++) {
    offers.push({
      id: i,
      author: addAuthor(i),
      title: Title[getRandomInt(0, 4)],
      address: `${Location.x}, ${Location.y}`,
      price: getRandomInt(1000, 8000),
      type: Type[getRandomInt(0, 3)],
      rooms: getRandomInt(1, 4),
      guests: getRandomInt(1, 4),
      checkin: Tymes[getRandomInt(0, 2)],
      checkout: Tymes[getRandomInt(0, 2)],
      features: getRandomArr(Features),
      description: Description[getRandomInt(0, 4)],
      photos: getRandomArr(Photos),
      location : {
        x: getRandomFloor(35.65000, 35.70000),
        y: getRandomFloor(139.70000, 139.80000),
      },
    });
  }

  return offers;
};

addOffer();

export {offers};
