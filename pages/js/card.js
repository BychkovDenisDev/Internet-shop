export class Card {
   constructor(src, title, date, parentSelector) {
      this.src = src,
      this.title = title,
      this.date = date,
      this.parentSelector = document.querySelector(parentSelector);
   }

   render() {
      const element = document.createElement('article');
      element.classList.add('slider-card');
      element.innerHTML = `
      <img class="slider-image" src=${this.src} alt=${this.title}>
      <h4 class="slider-text">${this.title}</h4>
      <p class="slider-date">${this.date}</p>
      <button class="button slider-button card-button">Купить</button>
   `;
   this.parentSelector.append(element);
   }
}