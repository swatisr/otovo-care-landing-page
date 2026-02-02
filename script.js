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
            author: "Enrico, Italy"
        },
        {
            quote: "The advice from Otovo was excellent! Questions about technical and commercial matters were answered clearly and competently.",
            author: "Toni, Germany"
        },
        {
            quote: "The process went smoothly from signing the contract to the installation of the solar panels. The installation date was perfectly timed.",
            author: "Antonio, Norway"
        },
        {
            quote: "We chose Otovo based on a recommendation, and they installed the panels and energy storage quickly and professionally.",
            author: "Karolina, Poland"
        },
        {
            quote: "Living on the Gulf Coast, having back up power available year round is a necessity. Otovo was here the next morning to resolve the issue.",
            author: "Mark, US"
        },
        {
            quote: "The installation team was professional and efficient. They explained everything clearly and left the site clean.",
            author: "Sarah, Spain"
        }
    ];

    const quoteElement = document.getElementById('showcase-quote');
    const authorElement = document.getElementById('showcase-author');
    const navFlags = document.querySelectorAll('.nav-flag');

    if (quoteElement && authorElement && navFlags.length > 0) {
        navFlags.forEach(flag => {
            flag.addEventListener('click', () => {
                // Remove active class from all
                navFlags.forEach(f => f.classList.remove('active'));
                // Add active class to clicked
                flag.classList.add('active');

                // Update content with fade effect
                const index = parseInt(flag.getAttribute('data-index'));
                const data = testimonials[index];

                // Simple fade out/in effect
                quoteElement.style.opacity = 0;
                authorElement.style.opacity = 0;

                setTimeout(() => {
                    quoteElement.textContent = data.quote;
                    authorElement.textContent = data.author;
                    
                    quoteElement.style.opacity = 1;
                    authorElement.style.opacity = 1;
                }, 200);
            });
        });
    }
});
