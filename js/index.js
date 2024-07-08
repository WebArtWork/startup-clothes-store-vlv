function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function() {
    function handleDropdownHover() {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');

            if (window.innerWidth > 992) {
                item.addEventListener('mouseenter', function() {
                    // Закриваємо всі відкриті головні меню перед відкриттям нового
                    closeAllMainDropdownMenus();
                    if (dropdownMenu.classList.contains('menu-drop1')) {
                        dropdownMenu.classList.add('show');
                    }
                });

                item.addEventListener('mouseleave', function() {
                    if (dropdownMenu.classList.contains('menu-drop1')) {
                        dropdownMenu.classList.remove('show');
                    }
                });
            } else {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // Закриваємо всі відкриті головні меню перед відкриттям нового, якщо це не вкладене меню
                    if (dropdownMenu.classList.contains('menu-drop1')) {
                        closeAllMainDropdownMenus();
                        if (dropdownMenu.classList.contains('show')) {
                            dropdownMenu.classList.remove('show');
                        } else {
                            dropdownMenu.classList.add('show');
                        }
                    } else {
                        // Запобігаємо закриттю вкладених меню
                        let parentDropdownMenu = item.closest('.menu-drop1');
                        closeAllMainDropdownMenusExcept(parentDropdownMenu);
                        dropdownMenu.classList.toggle('show');
                    }
                });
            }
        });
    }

    function closeAllMainDropdownMenus() {
        let mainDropdownMenus = document.querySelectorAll('.menu-drop1');
        mainDropdownMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }

    function closeAllMainDropdownMenusExcept(exception) {
        let mainDropdownMenus = document.querySelectorAll('.menu-drop1');
        mainDropdownMenus.forEach(menu => {
            if (menu !== exception) {
                menu.classList.remove('show');
            }
        });
    }

    handleDropdownHover();

    window.addEventListener('resize', function() {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');
        
        dropdownHoverItems.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');
            item.replaceWith(item.cloneNode(true));
        });

        handleDropdownHover();
    });
});
