document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
    
                const navbarHeight = navbar.offsetHeight;
                
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                if (document.activeElement.closest('.dropdown')) {
                    document.activeElement.blur();
                }
            }
        });
    });
});