const offset = 100;
const scrollUp = document.querySelector('.scroll-btn');

const getUp = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
   if (getUp() > offset) {
      scrollUp.classList.add("scroll-btn-active")
   } else {
      scrollUp.classList.remove("scroll-btn-active")
   }
});

scrollUp.addEventListener('click', () => {
   window.scroll({
      top: 0,
      behavior: 'smooth'
   });
});