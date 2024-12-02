document.addEventListener('DOMContentLoaded', function() {
    // Add active state to current page in navigation
    const currentLocation = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('text-blue-400');
        }
    });
});