// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (placeholder for future implementation)
    // const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    // if (mobileMenuBtn) { ... }
});
