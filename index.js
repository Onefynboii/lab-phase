document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');

            //Check if the link is an internal link
            if (targetId.startsWith('#')) {
            event.preventDefault();
           const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }

           }
        });
    });

    // Add a responsive navigation menu toggle for small screens
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});