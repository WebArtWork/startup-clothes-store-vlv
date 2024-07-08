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
                    dropdownHoverItems.forEach(otherItem => {
                        let otherDropdownMenu = otherItem.querySelector('.dropdown-menu');
                        if (otherItem !== item) {
                            otherDropdownMenu.classList.remove('show'); 
                        }
                    });

                    // Toggle the clicked dropdown
                    dropdownMenu.classList.toggle('show');
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