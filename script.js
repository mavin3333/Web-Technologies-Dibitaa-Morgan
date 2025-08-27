// This script adds a simple welcome alert on the homepage
document.addEventListener('DOMContentLoaded', function() {
    // Check if we are on the homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        alert('Welcome to the homepage!');
    }
});
