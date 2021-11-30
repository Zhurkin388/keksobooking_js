import {offer} from './data.js';

const getType = (type) => {
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
};

const renderPhoto = (offers) => {
  const cardTemplate = document.querySelector('#card').content;
  const template = cardTemplate.querySelector('.popup');
  const element = template.cloneNode(true);

  element.querySelector('.popup__title').textContent = offers['title'];
  element.querySelector('.popup__text--address').textContent = offers['address'];
  element.querySelector('.popup__text--price').textContent = offers['price'] + ' ₽/ночь';
  element.querySelector('.popup__type').textContent = getType(offers['type']);
  element.querySelector('.popup__text--capacity').textContent = `${offers['rooms']} комнаты для ${offers['guests']} гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${offers['checkin']}, выезд до ${offers['checkout']}`;

  const features = element.querySelector('.popup__features');

  offers['features'].forEach((off) => {
    const li = document.createElement('li');

    li.textContent = off;
    li.classList.add('popup__feature');
    li.classList.add('popup__feature--' + off);

    features.appendChild(li);
  });

  element.querySelector('.popup__description').textContent = offers['description'];

  const photos = element.querySelector('.popup__photos');
  offers['photos'].forEach((off) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = off
    img.style.width = '45px';
    img.style.height = '40px';

    photos.appendChild(img);
  });

  element.querySelector('.popup__avatar').src = offers['author']['avatar'];

  return element;
};

const rendersPhoto = () => {
  const map = document.querySelector('#map-canvas');
  let fragment = document.createDocumentFragment();

  offer.forEach((offe) => {
    fragment.appendChild(renderPhoto(offe));
  });

  map.appendChild(fragment.children[0]);
};

export {rendersPhoto};
