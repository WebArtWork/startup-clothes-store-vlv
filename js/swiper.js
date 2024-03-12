// let swiper = new Swiper(".mySwiper", {
//     effect: "fade", // Применяем эффект fade
//     fadeEffect: {
//         crossFade: true, // Включаем плавный переход между слайдами
//     },
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true, // Делаем пагинацию кликабельной
//     },
//     autoplay: {
//         delay: 6000, // Изменяем задержку до 6 секунд
//         disableOnInteraction: false,
//     },
//     mousewheel: false, // Отключаем скроллинг слайдера колесом мыши
//     keyboard: false, // Отключаем управление слайдером с клавиатуры
//     loop: true, // Включаем зацикливание слайдера
// });

const swiperOne = new Swiper('.cloth-swiper', {
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
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        }
    },
  });