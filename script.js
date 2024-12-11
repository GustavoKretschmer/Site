document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero-content');
    heroText.style.opacity = 0;
    heroText.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroText.style.transition = 'all 1s ease-out';
        heroText.style.opacity = 1;
        heroText.style.transform = 'translateY(0)';
    }, 500);
});

// Animações de rolagem suave
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
}