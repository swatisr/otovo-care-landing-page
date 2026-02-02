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
    const linkElement = document.getElementById('showcase-link');
    const navFlags = document.querySelectorAll('.nav-flag');
    const metaElement = document.querySelector('.showcase-meta');

    function updateTestimonial(index) {
        const data = testimonials[index];
        
        // Add fade out class
        quoteElement.classList.add('fade-out');
        metaElement.classList.add('fade-out');
        
        setTimeout(() => {
            // Update content
            quoteElement.textContent = data.quote;
            authorElement.textContent = data.author;
            linkElement.textContent = `Read why customers in ${data.country} choose Otovo Care →`;
            
            // Remove fade out and add fade in
            quoteElement.classList.remove('fade-out');
            metaElement.classList.remove('fade-out');
            quoteElement.classList.add('fade-in');
            metaElement.classList.add('fade-in');
            
            // Clean up fade in class after animation
            setTimeout(() => {
                quoteElement.classList.remove('fade-in');
                metaElement.classList.remove('fade-in');
            }, 300);
        }, 200);
    }

    if (quoteElement && authorElement && navFlags.length > 0) {
        navFlags.forEach(flag => {
            // Desktop Hover
            flag.addEventListener('mouseenter', () => {
                // Remove active class from all
                navFlags.forEach(f => f.classList.remove('active'));
                // Add active class to hovered
                flag.classList.add('active');

                const index = parseInt(flag.getAttribute('data-index'));
                updateTestimonial(index);
            });

            // Mobile Tap / Click
            flag.addEventListener('click', () => {
                // Remove active class from all
                navFlags.forEach(f => f.classList.remove('active'));
                // Add active class to clicked
                flag.classList.add('active');

                const index = parseInt(flag.getAttribute('data-index'));
                updateTestimonial(index);
            });
        });
    }
});
