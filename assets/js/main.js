// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    
    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', function() {
            navMobile.classList.toggle('active');
            
            // Toggle hamburger/X icon
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }
});
