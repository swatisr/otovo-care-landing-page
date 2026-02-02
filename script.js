// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const floatingNav = document.querySelector('.floating-nav');
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
        const triggerPoint = heroHeight - 100; // Show slightly before the end of hero section
        
        if (scrollTop > triggerPoint) {
            // Scrolled past hero: Hide main navbar, show floating navbar
            navbar.classList.add('nav-hidden');
            floatingNav.classList.add('visible');
        } else {
            // In hero: Show main navbar, hide floating navbar
            navbar.classList.remove('nav-hidden');
            floatingNav.classList.remove('visible');
        }
    });

    // Mobile Menu Toggle (placeholder)
    // const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    // if (mobileMenuBtn) { ... }
});
