import { Card } from './card.js';

const openModalBtn = document.querySelectorAll(".card-button");
const closedModalBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal");
const coverScreenShot = document.querySelector('.cover-screen');
const modalNumber = document.querySelector('.input-number');
const modalRaduobtn = document.querySelectorAll('.raduobtn-input');
const modalComment = document.querySelector('.content-comment');
const submitBtn = document.querySelector(".modal-buy-btn");
let isModalOpen = false;



console.log(openModalBtn.length);

const openModal = () => {
   coverScreen.style.display = 'block';
   modal.classList.add('modal-active');
   document.body.style.overflowX = 'hidden';
   isModalOpen = true;
}

const closeModal = () => {
   coverScreen.style.display = 'none';
   modal.classList.remove('modal-active');
   document.body.style.overflowX = 'visible';
   isModalOpen = false;
}

openModalBtn.forEach((item) => {
   item.addEventListener('click', (event) => {
      event.preventDefault;
      openModal();
   });
});
closedModalBtn.addEventListener('click', (e) => {
   e.preventDefault();
   closeModal();
});

coverScreenShot.addEventListener('click', closeModal);
window.addEventListener('keydown', (event) => {
   if (event.key === 'Escape') {
      event.preventDefault;
      if (isBurgerMenuOpen) {
         closeModal();
      }
   } 
});

window.addEventListener('resize', () => {
   if (isBurgerMenuOpen) {
      closeModal();
   }
});

let radio;
const colors = {
   "red": "Красный",
   "black": "Черный",
   "white": "Белый",
   "blue": "Синий"
}
const handleText = (e) => {
   e.preventDefault();
   let valueModalNumber = modalNumber.value;
   for (const r of modalRaduobtn) {
      if (r.checked) {
         radio = r.value;
      }
   }
   let valueModalComment = modalComment.value;
   if (valueModalNumber) {
      alert(`Ваш заказ оформлен\nУказанное количество: ${valueModalNumber}\nУказан цвет: ${colors[radio]}\nКомментарий к заказу: ${valueModalComment}`);
   }
}

submitBtn.addEventListener('click', handleText);
