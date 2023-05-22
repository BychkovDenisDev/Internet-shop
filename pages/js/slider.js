'use strict';

import { data } from './data.js'
import { Card } from './card.js';

//Считаем количество карточек в данных
const cardValue = data.length,
      arrayAllCards = addNumberForArray(cardValue),
      slider = document.querySelector('.slider'),
      sliderCarousel = document.querySelector('.slider-carousel'),
      btnPrev = document.querySelector('.slider-prev'),
      btnNext = document.querySelector('.slider-next'),
      itemActive = document.querySelector('#item-active'),
      itemLeft = document.querySelector('#item-left'),
      itemRight = document.querySelector('#item-right');

let maxCards = 0;
getMediaNum();

// Генерируем псевдослучайные числа и сохраняю первые n-чисел равное maxCards
let arrActiveCard = shuffle(arrayAllCards).slice(0, maxCards),
  // Создаем новый массив без чисел с главного экрана
   arrNextCard = shuffle(filterArray(arrayAllCards, arrActiveCard)).slice(0, maxCards);

console.log('Текущий массив: ', arrActiveCard);
console.log('Новый массив: ', arrNextCard);

// Выводим карточки в слайдере
const outputSliderCard = (value, arrayIndex, parentSelector) => {
   for (let i = 0; i < value; i++) {
      new Card (
         data[arrayIndex[i]].img,
         data[arrayIndex[i]].text,
         data[arrayIndex[i]].date,
         parentSelector
      ).render();
   }
}
outputSliderCard(maxCards, arrActiveCard, '#item-active')

const resize = () => {
   getMediaNum();
   itemActive.innerHTML = '';
   arrActiveCard = shuffle(arrayAllCards).slice(0, maxCards);
   arrNextCard = shuffle(filterArray(arrayAllCards, arrActiveCard)).slice(0, maxCards);
   outputSliderCard(maxCards, arrActiveCard, '#item-active');

}
window.addEventListener('resize', resize);

slider.addEventListener('click', e => {
   const card = e.target.closest('.slider__card');
  // Если нажали мимо карточки, то прерываю функцию
   if (!card) return;
  // Получаю имя (title) с карточки
   const name = card.children[1].innerHTML,
    // Нахожу по имени нужный объект с данными на питомца
   data = pets.filter(item => item.name === name)[0];
});

// Заполняем массив числами
function addNumberForArray(value) {
   const result = [];
   for (let i = 0; i < value; i++) {
      result.push(i)
   }
   return result;
}
// Получаем количество карточек, в зависимости от размера экрана
function getMediaNum() {
   if (document.documentElement.clientWidth < 768) {
      maxCards = 1;
   } else if (document.documentElement.clientWidth >= 768 &&
      document.documentElement.clientWidth < 1280) {
      maxCards = 2;
   } else if (document.documentElement.clientWidth >= 1280) {
      maxCards = 3;
   }
}
// Перемешиваем массив чисел
function shuffle(array) {
   const result = [...array]
   for (let i = result.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
   }
   return result;
}
// Создаем новый массив без чисел в активном окне
function filterArray(arrayAllCard, arrayActiveCard) {
   return arrayAllCard.filter(i => !arrayActiveCard.includes(i))
   .concat(arrayActiveCard.filter(i => !arrayAllCard.includes(i)));
}

const moveLeft = () => {
   sliderCarousel.classList.add('transition-left');
   btnPrev.removeEventListener('click', moveLeft);
   btnNext.removeEventListener('click', moveRight);
   outputSliderCard(maxCards, arrNextCard, '#item-left')
};

const moveRight = () => {
   sliderCarousel.classList.add('transition-right');
   btnPrev.removeEventListener('click', moveLeft);
   btnNext.removeEventListener('click', moveRight);
   outputSliderCard(maxCards, arrNextCard, '#item-right')
};

btnPrev.addEventListener('click', moveLeft);
btnNext.addEventListener('click', moveRight);

sliderCarousel.addEventListener('animationend', (animationEvent) => {
   let changedItem;
   if (animationEvent.animationName === 'move-left') {
      sliderCarousel.classList.remove('transition-left');
      changedItem = itemLeft;
      itemActive.innerHTML = itemLeft.innerHTML;
   } else {
      sliderCarousel.classList.remove('transition-right');
      changedItem = itemRight;
      itemActive.innerHTML = itemRight.innerHTML;
   }
   arrActiveCard = [...arrNextCard];
   arrNextCard = shuffle(filterArray(arrayAllCards, arrActiveCard)).slice(0, maxCards);

   console.log('Текущий массив: ', arrActiveCard);
   console.log('Новый массив: ', arrNextCard);

   changedItem.innerHTML = '';

   btnPrev.addEventListener('click', moveLeft);
   btnNext.addEventListener('click', moveRight);
});