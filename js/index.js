(function() {
    "use strict";
  
    new Swiper('.testimonials-slider-comments', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 20
      //   },
  
      //   1000: {
      //     slidesPerView: 2,
      //     spaceBetween: 20
      //   },
  
      //   1200: {
      //     slidesPerView: 3,
      //     spaceBetween: 40
      //   },

      //   1440: {
      //     slidesPerView: 3,
      //     spaceBetween: 20
      //   }
      // }
    });
  
  })()


const navigation = document.querySelector('.navigation')
const burgerMenu = document.querySelector('.toggle-menu')
const questions = [...document.querySelectorAll('.question-header-card')]

/* Funcionalidade de visualisar as respostas para cada pergunta*/
questions.forEach(element => {
  element.addEventListener('click', ()=> {
    element.classList.toggle('view-answer')
  })
});

/*--------------Funcionalidade de operar o menu humburger -------------*/
burgerMenu.addEventListener('click', ()=>{
  navigation.classList.toggle('toggle-nav')
})

navigation.addEventListener('click', ()=>{
  navigation.classList.toggle('toggle-nav')
})