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
                item.addEventListener('click', function(e) {
                    console.log(e.target);
                    e.stopPropagation();
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

    // document.addEventListener('click', function(e) {
    //     if (window.innerWidth <= 992) {

    //         let dropdownHoverItems = document.querySelectorAll('.dropdown-hover .dropdown-menu');
    //         dropdownHoverItems.forEach(menu => {
    //             if (!menu.contains(e.target)) {
    //                 menu.classList.remove('show');
    //             }
    //         });
    //     }
    // });
});