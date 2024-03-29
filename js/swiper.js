let swiper = new Swiper(".mySwiper", {
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    mousewheel: false,
    loop: true,
});

const swiperCloth = new Swiper('.cloth-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
      },
  });