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
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
  
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  
  })()