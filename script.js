// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const floatingNav = document.querySelector('.floating-nav');
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
        const triggerPoint = heroHeight - 100; // Show slightly before the end of hero section
        
        // Main Navbar: Hide immediately when scrolling down
        if (scrollTop > 50) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
        
        // Floating Navbar: Show only after passing the hero section
        if (scrollTop > triggerPoint) {
            floatingNav.classList.add('visible');
        } else {
            floatingNav.classList.remove('visible');
        }
    });

    // Mobile Menu Toggle (placeholder)
    // const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    // if (mobileMenuBtn) { ... }
});
