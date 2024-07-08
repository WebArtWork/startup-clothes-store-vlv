function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function() {
    function handleDropdownHover() {
        // Знаходимо перший елемент з класом .dropdown-hover
        let firstDropdownHoverItem = document.querySelector('.dropdown-hover');

        if (firstDropdownHoverItem) {
            let dropdownMenu = firstDropdownHoverItem.querySelector('.dropdown-menu');

            if (window.innerWidth > 992) {
                firstDropdownHoverItem.addEventListener('mouseenter', function() {
                    // Закриваємо всі відкриті меню перед відкриттям нового
                    closeAllDropdownMenus();
                    dropdownMenu.classList.add('show');
                });

                firstDropdownHoverItem.addEventListener('mouseleave', function() {
                    dropdownMenu.classList.remove('show');
                });
            } else {
                firstDropdownHoverItem.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // Закриваємо всі відкриті меню перед відкриттям нового
                    closeAllDropdownMenus();
                    if (dropdownMenu.classList.contains('show')) {
                        dropdownMenu.classList.remove('show');
                    } else {
                        dropdownMenu.classList.add('show');
                    }
                });
            }
        }
    }

    function closeAllDropdownMenus() {
        let dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }

    handleDropdownHover();

    window.addEventListener('resize', function() {
        // Перезапускаємо функцію handleDropdownHover після зміни розміру вікна
        handleDropdownHover();
    });
});