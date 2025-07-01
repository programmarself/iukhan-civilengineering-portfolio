// Additional Animation Functions
document.addEventListener('DOMContentLoaded', function() {
    // Floating elements animation
    const floatElements = document.querySelectorAll('.float-animation');
    
    floatElements.forEach(el => {
        const delay = Math.random() * 5;
        el.style.animationDelay = `${delay}s`;
    });
    
    // Project card hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.project-image img').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-image img').style.transform = 'scale(1)';
        });
    });
    
    // Skill item hover effect
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.skill-icon').style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.skill-icon').style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Timeline item animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Contact form input animation
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Feature item hover animation
    const featureItems = document.querySelectorAll('.feature-item, .expertise-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'rotate(10deg) scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'rotate(0) scale(1)';
        });
    });
});