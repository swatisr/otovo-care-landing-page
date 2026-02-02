document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const floatingNav = document.querySelector('.floating-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Floating Nav Logic
        if (window.scrollY > 400) { // Show after hero section roughly
            floatingNav.classList.add('visible');
        } else {
            floatingNav.classList.remove('visible');
        }
    });

    // Testimonial Showcase Logic
    const testimonials = [
        {
            quote: "Incredible experience! A skilled and helpful team. Highly recommended!",
            author: "Enrico, Italy",
            country: "Italy"
        },
        {
            quote: "The advice from Otovo was excellent! Questions about technical and commercial matters were answered clearly and competently.",
            author: "Toni, Germany",
            country: "Germany"
        },
        {
            quote: "The process went smoothly from signing the contract to the installation of the solar panels. The installation date was perfectly timed.",
            author: "Antonio, Norway",
            country: "Norway"
        },
        {
            quote: "We chose Otovo based on a recommendation, and they installed the panels and energy storage quickly and professionally.",
            author: "Karolina, Poland",
            country: "Poland"
        },
        {
            quote: "Living on the Gulf Coast, having back up power available year round is a necessity. Otovo was here the next morning to resolve the issue.",
            author: "Mark, US",
            country: "US"
        },
        {
            quote: "The installation team was professional and efficient. They explained everything clearly and left the site clean.",
            author: "Sarah, Spain",
            country: "Spain"
        }
    ];

    const quoteElement = document.getElementById('showcase-quote');
    const authorElement = document.getElementById('showcase-author');
    const navFlags = document.querySelectorAll('.nav-flag');
    const metaElement = document.querySelector('.showcase-meta');
    let currentIndex = 0;
    let autoRotateInterval;

    function updateTestimonial(index) {
        // If content is missing, don't run
        if (!quoteElement || !authorElement) return;

        const data = testimonials[index];
        
        // Update active flag visual
        navFlags.forEach(f => f.classList.remove('active'));
        if (navFlags[index]) navFlags[index].classList.add('active');

        // Add fade out class
        quoteElement.classList.add('fade-out');
        metaElement.classList.add('fade-out');
        
        setTimeout(() => {
            // Update content
            quoteElement.textContent = data.quote;
            authorElement.textContent = data.author;
            // Link element was removed, so we skip updating it
            
            // Remove fade out and add fade in
            quoteElement.classList.remove('fade-out');
            metaElement.classList.remove('fade-out');
            quoteElement.classList.add('fade-in');
            metaElement.classList.add('fade-in');
            
            // Clean up fade in class after animation
            setTimeout(() => {
                quoteElement.classList.remove('fade-in');
                metaElement.classList.remove('fade-in');
            }, 800); // Match CSS transition duration
        }, 800); // Wait for fade out to complete
    }

    function startAutoRotate() {
        // Clear any existing interval to avoid duplicates
        if (autoRotateInterval) clearInterval(autoRotateInterval);
        
        autoRotateInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(currentIndex);
        }, 5000); // Change every 5 seconds
    }

    function resetAutoRotate() {
        clearInterval(autoRotateInterval);
        startAutoRotate();
    }

    if (quoteElement && authorElement && navFlags.length > 0) {
        // Initial start
        startAutoRotate();

        navFlags.forEach(flag => {
            // Handle click (works for both desktop and mobile as explicit intent)
            flag.addEventListener('click', () => {
                const index = parseInt(flag.getAttribute('data-index'));
                currentIndex = index;
                updateTestimonial(index);
                resetAutoRotate(); // Restart timer on manual interaction
            });
        });
    }

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const card = item.querySelector('.faq-card');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        card.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) {
                    otherAnswer.style.display = 'none';
                }
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                if (answer) {
                    answer.style.display = 'block';
                }
            }
        });
    });
});
