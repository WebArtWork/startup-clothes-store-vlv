function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function () {
    // Перевірка розміру екрану
    if (window.innerWidth > 768) { // Припустимо, що ви хочете активувати на екранах ширше 768px
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let button = item.querySelector('.button-menu');
            button.addEventListener('mouseenter', function () {
                dropdownMenu.classList.add('show');
            });
            let dropdownMenu = item.querySelector('.dropdown-menu');


            item.addEventListener('mouseleave', function () {
                dropdownMenu.classList.remove('show');
            });
        });
    }
});