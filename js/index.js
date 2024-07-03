function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function() {
    function handleDropdownHover() {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');

            // Clean up any previous event listeners to prevent duplicate events
            item.replaceWith(item.cloneNode(true));
            item = document.querySelectorAll('.dropdown-hover')[0];

            if (window.innerWidth > 768) {
                item.addEventListener('mouseenter', function() {
                    dropdownMenu.classList.add('show');
                });

                item.addEventListener('mouseleave', function() {
                    dropdownMenu.classList.remove('show');
                });
            } else {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    let isOpen = dropdownMenu.classList.contains('show');
                    closeAllDropdowns();
                    if (!isOpen) {
                        dropdownMenu.classList.toggle('show');
                    }
                });

                // Handle clicks within the dropdown menu to prevent propagation
                dropdownMenu.addEventListener('click', function(e) {
                    e.stopPropagation();
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
        handleDropdownHover();
    });

    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            closeAllDropdowns();
        }
    });
});
