function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function() {
    function handleDropdownHover() {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let dropdownToggle = item.querySelector('.dropdown-toggle');
            let dropdownMenu = item.querySelector('.dropdown-menu');
            
            if (window.innerWidth > 992) {
                item.addEventListener('mouseenter', function() {
                    closeAllDropdowns();
                    dropdownMenu.classList.add('show');
                });

                item.addEventListener('mouseleave', function() {
                    dropdownMenu.classList.remove('show');
                });
            } else {
                dropdownToggle.addEventListener('click', function(e) {
                    e.stopPropagation();
                    let isVisible = dropdownMenu.classList.contains('show');
                    closeAllDropdowns();
                    if (!isVisible) {
                        dropdownMenu.classList.add('show');
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
    document.addEventListener('click', function() {
        closeAllDropdowns();
    });
});