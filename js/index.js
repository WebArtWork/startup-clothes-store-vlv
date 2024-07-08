function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function() {
    function closeAllDropdowns() {
        let dropdownMenus = document.querySelectorAll('.dropdown-menu.show');
        dropdownMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }
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
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    closeAllDropdowns();
                    dropdownMenu.classList.add('show');
                    // if (Array.from(dropdownMenu.classList)?.length) {
                    //     console.log(Array.from(e.target.classList));
                    //     if (Array.from(e.target.classList).includes('dropdown-item')) {
                    //         console.log(e.target);
                    //     } else {
                    //         if (Array.from(dropdownMenu.classList).includes('show')) {
                    //             dropdownMenu.classList.remove('show');
                    //         } else {
                    //             dropdownMenu.classList.add('show');
                    //         }
                    //     }
                    // }
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