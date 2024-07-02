function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};

document.addEventListener("DOMContentLoaded", function() {
    function handleDropdownHover() {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');

            // For larger screens, show dropdown on hover
            if (window.innerWidth > 768) {
                item.addEventListener('mouseenter', function() {
                    dropdownMenu.classList.add('show');
                });

                item.addEventListener('mouseleave', function() {
                    dropdownMenu.classList.remove('show');
                });
            } else {
                // For smaller screens, show dropdown on click
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    dropdownMenu.classList.toggle('show');
                });
            }
        });
    }

    handleDropdownHover();

    // Reapply hover/click behavior on window resize
    window.addEventListener('resize', function() {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');
        
        dropdownHoverItems.forEach(item => {
            let dropdownMenu = item.querySelector('.dropdown-menu');

            // Remove existing event listeners to avoid duplicate events
            item.replaceWith(item.cloneNode(true));
        });

        handleDropdownHover();
    });

    // Close dropdowns when clicking outside (only on small screens)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            let dropdownHoverItems = document.querySelectorAll('.dropdown-hover .dropdown-menu');
            dropdownHoverItems.forEach(menu => {
                if (!menu.contains(e.target)) {
                    menu.classList.remove('show');
                }
            });
        }
    });
});