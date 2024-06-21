document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        let timeout; // Для відстрочки приховання меню

        dropdown.addEventListener('mouseenter', function(event) {
            clearTimeout(timeout); // Очищаємо попередній таймаут, якщо він існує
            this.classList.add('active'); // Додаємо клас 'active' для показу випадаючого меню
        });

        dropdown.addEventListener('mouseleave', function(event) {
            // Встановлюємо таймаут, щоб приховати меню після відведення курсора
            timeout = setTimeout(() => {
                this.classList.remove('active'); // Видаляємо клас 'active' для приховання випадаючого меню
            }, 100); // Час (у мілісекундах), після якого меню буде приховано (можна змінити на потрібний)
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navOffsetTop = nav.offsetTop; // Отримуємо верхню позицію навігації відносно верху документа

    function fixNav() {
        if (window.scrollY >= navOffsetTop) {
            nav.classList.add('fixed-nav'); // Додаємо клас, коли досягаємо верхньої позиції
        } else {
            nav.classList.remove('fixed-nav'); // Видаляємо клас, якщо ми вище верхньої позиції
        }
    }

    window.addEventListener('scroll', fixNav); // Слухаємо подію прокрутки вікна
});



$('a').click(function(e){
    e.preventDefault();
  })
