let swiper = new Swiper(".mySwiper", {
    effect: "fade", // Применяем эффект fade
    fadeEffect: {
        crossFade: true, // Включаем плавный переход между слайдами
    },
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Делаем пагинацию кликабельной
    },
    autoplay: {
        delay: 6000, // Изменяем задержку до 6 секунд
        disableOnInteraction: false,
    },
    mousewheel: false, // Отключаем скроллинг слайдера колесом мыши
    keyboard: false, // Отключаем управление слайдером с клавиатуры
    loop: true, // Включаем зацикливание слайдера
});