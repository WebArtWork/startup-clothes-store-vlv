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
                    if (event.target.classList.contains('button-menu')) {
                        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
                        openDropdowns.forEach(dropdown => {
                            if (!dropdown.parentElement.contains(event.target)) {
                                dropdown.classList.remove('show');
                            }
                        });
                    }
                });
        
                const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
                dropdownToggles.forEach(toggle => {
                    toggle.addEventListener('click', function(event) {
                        const parentDropdown = this.closest('.dropdown');
                        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        
                        console.log(openDropdowns);
        
                        const nextDropdownMenu = this.nextElementSibling;
                        if (nextDropdownMenu.classList.contains('show')) {
                            nextDropdownMenu.classList.remove('show');
                        } else {
                            nextDropdownMenu.classList.add('show');
                        }
        
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