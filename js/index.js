function setMainPhoto(newSrc) {
    var mainPhoto = document.getElementById('mainPhoto');
    mainPhoto.src = newSrc;
};  

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 768) {
        let dropdownHoverItems = document.querySelectorAll('.dropdown-hover');

        dropdownHoverItems.forEach(item => {
            let button = item.querySelector('.button-menu');
            let dropdownMenu = item.querySelector('.dropdown-menu');

            button.addEventListener('mouseenter', function() {
                dropdownMenu.classList.add('show');
            });

            item.addEventListener('mouseleave', function() {
                dropdownMenu.classList.remove('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!item.contains(e.target)) {
                    dropdownMenu.classList.remove('show');
                }
            });
        });
    }
});