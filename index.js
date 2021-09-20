const faqsAnswer =document.querySelector('.faqsAns');
function faqsAns(){
  faqsAnswer.style.display='block';  
}
function clsAns(){
  faqsAnswer.style.display='none';
}

const carouselImages1 = document.querySelector('.carousel__images-1');
const carouselButtons1 = document.querySelectorAll('.carousel__button-1');
const numberOfImages1 = document.querySelectorAll('.carousel__images-1 img').length;
carouselButtons1.forEach(button => {
    let imageIndex = 1;
    let translateX = 0;
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous-1') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages1) {
        imageIndex++;
        translateX -= 300;
      }
    }
    
    carouselImages1.style.transform = `translateX(${translateX}px)`;
  });
});
const carouselImages2 = document.querySelector('.carousel__images-2');
const carouselButtons2 = document.querySelectorAll('.carousel__button-2');
const numberOfImages2 = document.querySelectorAll('.carousel__images-2 img').length;
carouselButtons2.forEach(button => {
    let imageIndex = 1;
    let translateX = 0;
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous-2') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages2) {
        imageIndex++;
        translateX -= 300;
      }
    }
    
    carouselImages2.style.transform = `translateX(${translateX}px)`;
  });
});
const carouselImages3 = document.querySelector('.carousel__images-3');
const carouselButtons3 = document.querySelectorAll('.carousel__button-3');
const numberOfImages3 = document.querySelectorAll('.carousel__images-3 img').length;
carouselButtons3.forEach(button => {
    let imageIndex = 1;
    let translateX = 0;
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous-3') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages3) {
        imageIndex++;
        translateX -= 300;
      }
    }
    
    carouselImages3.style.transform = `translateX(${translateX}px)`;
  });
});
const carouselImages4 = document.querySelector('.carousel__images-4');
const carouselButtons4 = document.querySelectorAll('.carousel__button-4');
const numberOfImages4 = document.querySelectorAll('.carousel__images-4 img').length;
carouselButtons4.forEach(button => {
    let imageIndex = 1;
    let translateX = 0;
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous-4') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages4) {
        imageIndex++;
        translateX -= 300;
      }
    }
    
    carouselImages4.style.transform = `translateX(${translateX}px)`;
  });
});
const carouselImages5 = document.querySelector('.carousel__images-5');
const carouselButtons5 = document.querySelectorAll('.carousel__button-5');
const numberOfImages5 = document.querySelectorAll('.carousel__images-5 img').length;
carouselButtons5.forEach(button => {
    let imageIndex = 1;
    let translateX = 0;
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous-5') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages5) {
        imageIndex++;
        translateX -= 300;
      }
    }
    
    carouselImages5.style.transform = `translateX(${translateX}px)`;
  });
});
const imageItems = document.querySelectorAll('.image-item');
const movieCards = document.querySelectorAll('.movie-card');
function selectCard(e) {
    removeShow();
    const movieCard = document.querySelector(`.${this.id}`);
    movieCard.classList.add('show');
}
function removeShow(){
    movieCards.forEach(card =>card.classList.remove('show'));
}
imageItems.forEach(item => item.addEventListener('click',selectCard));

