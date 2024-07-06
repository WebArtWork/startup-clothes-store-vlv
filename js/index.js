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
                    dropdownMenu.classList.add('show');
                });

                item.addEventListener('mouseleave', function() {
                    dropdownMenu.classList.remove('show');
                });
            } else {
                document.addEventListener('click', function(event) {
                    const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
                    openDropdowns.forEach(dropdown => {
                        if (!dropdown.parentElement.contains(event.target)) {
                            dropdown.classList.remove('show');
                        }
                    });
                });
        
                const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
                dropdownToggles.forEach(toggle => {
                    toggle.addEventListener('click', function(event) {
                        const parentDropdown = this.closest('.dropdown, .dropend');
                        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        
                        openDropdowns.forEach(dropdown => {
                            if (dropdown !== parentDropdown.querySelector('.menu-drop1') && dropdown !== parentDropdown.querySelector('.menu-drop2')) {
                                dropdown.classList.remove('show');
                            }
                        });
        
                        const nextDropdownMenu = this.parentElement.querySelector('.menu-drop1, .menu-drop2');
                        if (nextDropdownMenu && (nextDropdownMenu.classList.contains('menu-drop1') || nextDropdownMenu.classList.contains('menu-drop2'))) {
                            nextDropdownMenu.classList.toggle('show');
                        }
        
                        event.stopPropagation();
                    });
                });
        
                // Prevent closing dropdown when clicking inside a submenu
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.addEventListener('click', function(event) {
                        event.stopPropagation();
                    });
                });
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