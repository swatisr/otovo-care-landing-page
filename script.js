// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
        
        // Keep the 'scrolled' class for potential style changes (like more opacity)
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile Menu Toggle (placeholder for future implementation)
    // const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    // if (mobileMenuBtn) { ... }
});
