function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function() {
    function handleDropdownHover() {
        const dropdownHoverElements = document.querySelectorAll('.dropdown-hover');
        const dropdownItemElements = document.querySelectorAll('.dropdown-item');

        const combinedArray = [...dropdownHoverElements, ...dropdownItemElements];
        combinedArray.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');
            
            if (window.innerWidth > 992) {
                item.addEventListener('mouseenter', function() {
                    dropdownMenu.classList.add('show');
                });

                item.addEventListener('mouseleave', function() {
                    dropdownMenu.classList.remove('show');
                });
            } else {    
                item.addEventListener('show.bs.dropdown', function(e) {
                    if (Array.from(e.target.classList).includes('btn')) {
                        e.stopPropagation()
                    } else {
                        let dropdowns = document.querySelectorAll('.dropdown-menu');
                        dropdowns.forEach(dropdown => {
                            dropdown.classList.remove('show');
                        });
                    }
                });
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
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



document.getElementById('toggle-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
});