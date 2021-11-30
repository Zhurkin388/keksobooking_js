import {offers} from './data.js';
import {getRussianType} from './util.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const canvas = document.querySelector('#map-canvas');

const renderCard = (offer) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent = getRussianType(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('.popup__avatar').src = offer.author[0].avatar;


  const popupFeatures = cardElement.querySelector('.popup__features');
  const fragmentLi = document.createDocumentFragment();

  offer.features.forEach((offers) => {
    const tags = document.createElement('li');

    tags.classList.add('popup__feature');
    tags.classList.add('popup__feature--' + offers);

    fragmentLi.appendChild(tags);

    popupFeatures.appendChild(fragmentLi);
  });

  const popupPictures = cardElement.querySelector('.popup__photos');
  const fragmentImg = document.createDocumentFragment();

  offer.photos.forEach((offe) => {
    const tagsImg = document.createElement('img');

    tagsImg.classList.add('popup__photo');
    tagsImg.src = offe;
    tagsImg.alt = 'Фотография жилья';
    tagsImg.style.width = '45px';
    tagsImg.style.height = '40px';

    fragmentImg.appendChild(tagsImg);

    popupPictures.appendChild(fragmentImg);
  });


  return cardElement;

};

export { renderCard };
