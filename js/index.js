function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function () {
    function handleDropdownHover() {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');

            if (window.innerWidth > 992) {
                item.addEventListener('mouseenter', function () {
                    // Закриваємо всі відкриті меню перед відкриттям поточного
                    closeAllDropdownMenus();
                    dropdownMenu.classList.add('show');
                });

                item.addEventListener('mouseleave', function () {
                    dropdownMenu.classList.remove('show');
                });
            } else {
                item.addEventListener('click', function (e) {
                    e.stopPropagation();
                    // Закриваємо всі відкриті меню перед відкриттям поточного
                    closeAllDropdownMenus();
                    if (dropdownMenu.classList.contains('show')) {
                        dropdownMenu.classList.remove('show');
                    } else {
                        dropdownMenu.classList.add('show');
                    }
                });
            }
        });
    }

    function closeAllDropdownMenus() {
        let dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }

    handleDropdownHover();

    window.addEventListener('resize', function () {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');
            item.replaceWith(item.cloneNode(true));
        });

        handleDropdownHover();
    })
});