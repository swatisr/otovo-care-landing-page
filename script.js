// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const floatingNav = document.querySelector('.floating-nav');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        
        // Threshold for switching navbars
        if (scrollTop > 100) {
            // Scrolled state: Hide main navbar, show floating navbar
            navbar.classList.add('nav-hidden');
            floatingNav.classList.add('visible');
        } else {
            // Top state: Show main navbar, hide floating navbar
            navbar.classList.remove('nav-hidden');
            floatingNav.classList.remove('visible');
        }
    });

    // Mobile Menu Toggle (placeholder)
    // const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    // if (mobileMenuBtn) { ... }
});
