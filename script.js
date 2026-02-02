// Cookie Banner
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieBtn = document.getElementById('cookieBtn');
    
    // Show cookie banner if not dismissed
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }
    
    cookieBtn.addEventListener('click', () => {
        cookieBanner.classList.remove('show');
        localStorage.setItem('cookieConsent', 'true');
    });
});

// Navigation Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 72;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Optional: Unobserve after animation to improve performance
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        const heroVideo = hero.querySelector('.hero-video-container');
        
        if (scrolled < window.innerHeight) {
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }
            if (heroVideo) {
                heroVideo.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        }
    }
});

// Map Location Hover Effects
const locationMarkers = document.querySelectorAll('.location-marker');
const locationsList = document.querySelectorAll('.location-category li');

locationMarkers.forEach(marker => {
    marker.addEventListener('mouseenter', () => {
        const locationName = marker.getAttribute('data-location');
        // Add visual feedback
        marker.style.transition = 'all 0.3s ease';
    });
    
    marker.addEventListener('click', () => {
        const locationName = marker.getAttribute('data-location');
        // Scroll to location in list or highlight
        locationsList.forEach(li => {
            if (li.textContent.includes(locationName)) {
                li.scrollIntoView({ behavior: 'smooth', block: 'center' });
                li.style.color = 'var(--accent-color)';
                setTimeout(() => {
                    li.style.color = '';
                }, 2000);
            }
        });
    });
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Observe stat cards and animate counters
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const text = statNumber.textContent;
                // Extract number from text (handles formats like "1.19 million", "42,514", "$836B")
                let num = parseFloat(text.replace(/[^0-9.]/g, ''));
                if (text.includes('million')) num *= 1000000;
                if (text.includes('B')) num *= 1000000000;
                if (text.includes('K')) num *= 1000;
                
                if (!isNaN(num)) {
                    statNumber.textContent = '0';
                    animateCounter(statNumber, num);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('.newsletter-input').value;
        
        // Simulate form submission
        const submitBtn = newsletterForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Signing up...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = '✓ Signed up!';
            submitBtn.style.background = '#10b981';
            newsletterForm.querySelector('.newsletter-input').value = '';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 2000);
        }, 1000);
    });
}

// Testimonial Card Hover Effects
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Feature Card Stagger Animation
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Comparison Cards Stagger Animation
const comparisonCards = document.querySelectorAll('.comparison-card');
comparisonCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Animated Shapes in Technology Section
const shapes = document.querySelectorAll('.shape');
shapes.forEach((shape, index) => {
    setInterval(() => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 3000 + index * 1000);
});

// Scroll Progress Indicator (Optional)
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--accent-color);
        z-index: 10000;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.pageYOffset;
        const progress = scrolled / windowHeight;
        progressBar.style.transform = `scaleX(${progress})`;
    });
}

createScrollProgress();

// Lazy Loading Images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-heavy functions
const throttledScroll = throttle(() => {
    // Scroll-based animations here
}, 16);

window.addEventListener('scroll', throttledScroll);

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--accent-color);
    }
    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);
