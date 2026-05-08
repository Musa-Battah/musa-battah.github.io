// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Button click alerts (for demo purposes)
// const buttons = document.querySelectorAll('.btn');
// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (button.textContent === 'Learn More') {
//             alert('Thanks for your interest! More about me coming soon.');
//         } else if (button.textContent === 'Contact Me') {
//             alert('Feel free to reach out via email or social media!');
//         } else if (button.textContent === 'View Project') {
//             alert('Project details will be added soon!');
//         }
//     });
// });

// Add active class to current section in navbar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Optional: Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and boxes
document.querySelectorAll('section, .box, .portfolio-item, .carousel-slide').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Carousel pause/resume on hover (already handled by CSS)
console.log('Portfolio site loaded successfully!');


// Contact form with mailto - better UX
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Get form values for confirmation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Show what will be sent
        const confirmSend = confirm(`Send message to musabattah@gmail.com?\n\nFrom: ${name} (${email})\nMessage: ${message.substring(0, 50)}...`);
        
        if (!confirmSend) {
            e.preventDefault(); // Stop if user cancels
        }
        // If confirmed, form submits normally to mailto:
    });
}