document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const floatingNav = document.querySelector('.floating-nav');
    
    window.addEventListener('scroll', () => {
        // Main Navbar Logic: Hide immediately on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }

        // Floating Navbar Logic: Show after hero section
        if (window.scrollY > 400) { 
            floatingNav.classList.add('visible');
        } else {
            floatingNav.classList.remove('visible');
        }
    });

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Close other open items
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                const answer = currentlyActive.querySelector('.faq-answer');
                answer.style.display = 'none';
            }
            
            // Toggle clicked item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});
