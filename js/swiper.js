let swiper = new Swiper(".mySwiper", {
    effect: "fade", // Применяем эффект fade
    fadeEffect: {
        crossFade: true, // Включаем плавный переход между слайдами
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Делаем пагинацию кликабельной
    },
    autoplay: {
        delay: 6000, // Изменяем задержку до 6 секунд
        disableOnInteraction: false,
    },
    mousewheel: false, // Отключаем скроллинг слайдера колесом мыши
    loop: true, // Включаем зацикливание слайдера
});

const swiperCloth = new Swiper('.cloth-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
  
  
    // Navigation arrows
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