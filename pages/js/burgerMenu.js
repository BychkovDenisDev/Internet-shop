const burgerBtn = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuLinks = document.querySelector('.burger-list');
const coverScreen = document.querySelector('.cover-screen');

let isBurgerMenuOpen = false;
let isAnimanionStop = true;
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);


const openBurger = () => {
   coverScreen.style.display = 'block';
   burgerBtn.classList.remove('header-burger-closed');
   burgerBtn.classList.add('header-burger-open');
   burgerMenu.classList.add('burger-menu-active');
   burgerMenu.classList.add('burger-menu-animation-in');
   burgerMenu.classList.remove('burger-menu-animation-out');
   document.body.style.overflowX = 'hidden';
   isBurgerMenuOpen = true;
};

const closeBurger = () => {
   coverScreen.style.display = 'none';
   burgerBtn.classList.add('header-burger-closed');
   burgerBtn.classList.remove('header-burger-open');
   burgerMenu.classList.remove('burger-menu-animation-in');
   burgerMenu.classList.add('burger-menu-animation-out');
   document.body.style.overflowX = 'visible';
   setTimeout(removeClassActive, 1500);
   isBurgerMenuOpen = false;
};

const removeClassActive = () => {
   burgerMenu.classList.remove('burger-menu-active');
};

burgerBtn.addEventListener('click', (e) => {
   e.stopPropagation();
   if(isBurgerMenuOpen) {
      closeBurger();
   } else {
      openBurger();
   }
});

coverScreen.addEventListener('click', closeBurger);
window.addEventListener('keydown', (event) => {
   if (event.key === 'Escape') {
      event.preventDefault;
      if (isBurgerMenuOpen) {
         closeBurger();
      }
   } 
});

burgerMenuLinks.forEach((item) => {
   item.addEventListener('click', (event) => {
      event.preventDefault;
      if (isBurgerMenuOpen) {
         closeBurger();
      }
   });
});

window.addEventListener('resize', () => {
   if (isBurgerMenuOpen) {
      closeBurger();
   }
});