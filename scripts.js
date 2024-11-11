document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada exitosamente.');

    activateMenuLinks();

    animateMessage();

    animateButtonClicks();

    smoothScrollToSections();

    implementFadeInOnScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('#nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

const nav = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});

});

function activateMenuLinks() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function animateMessage() {
    const animatedMessage = document.getElementById('mensaje-animado');
    if (animatedMessage) {
        animatedMessage.style.animation = 'desplazamiento-horizontal 5s infinite linear';
    }
}

function animateButtonClicks() {
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 300);
        });
    });
}

function smoothScrollToSections() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function implementFadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });
}