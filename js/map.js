import {renderCard} from './add_offer.js';
import {offers} from './data.js';

/* global L:readonly */

const map = L.map('map-canvas')
  .setView({
    lat: 36.20000,
    lng: 139.80000,
  }, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

offers.forEach((offer) => {
  const lat = offer.location.x;
  const lng = offer.location.y;

  const icon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      renderCard(offer),
      {
        keepInView: true,
      },
    );
});

const adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');

const mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('disabled');
