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
                            if (dropdown !== parentDropdown.querySelector('.dropdown-menu')) {
                                dropdown.classList.remove('show');
                            }
                        });
        
                        console.log(event.target.parentElement.parentElement);
                        const nextDropdownMenu = event.target.parentElement.parentElement.querySelector('.dropdown-menu');
                        if (nextDropdownMenu && nextDropdownMenu.classList.contains('dropdown-menu')) {
                            if (nextDropdownMenu.classList.contains('show')) {
                                nextDropdownMenu.classList.remove('show');
                            } else {
                                nextDropdownMenu.classList.add('show');
                            }
                        }
        
                        event.stopPropagation();
                    });
                });
        
                // Prevent closing dropdown when clicking inside a submenu
                document.querySelectorAll('.menu-drop2').forEach(menu => {
                    menu.addEventListener('click', function(event) {
                        console.log('1', event.target);
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