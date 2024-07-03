function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function() {
    function handleDropdownHover() {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');
            let dropdownToggle = item.querySelector('.btn');

            if (window.innerWidth > 768) {
                item.addEventListener('mouseenter', function() {
                    dropdownMenu.classList.add('show');
                });

                item.addEventListener('mouseleave', function() {
                    dropdownMenu.classList.remove('show');
                });
            } else {
                dropdownToggle.addEventListener('click', function(e) {
                    e.stopPropagation();
                    let isOpen = dropdownMenu.classList.contains('show');
                    closeAllDropdowns();
                    if (!isOpen) {
                        dropdownMenu.classList.toggle('show');
                    }
                });
            }
        });
    }

    function closeAllDropdowns() {
        let dropdownMenus = document.querySelectorAll('.dropdown-hover .dropdown-menu');
        dropdownMenus.forEach(menu => {
            menu.classList.remove('show');
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

    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            let dropdownHoverItems = document.querySelectorAll('.dropdown-hover .dropdown-menu');
            dropdownHoverItems.forEach(menu => {
                if (!menu.contains(e.target) && !e.target.closest('.dropdown-hover')) {
                    menu.classList.remove('show');
                }
            });
        }
    });
});
