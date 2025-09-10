document.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (!isAuthenticated) {
        window.location.replace('index.html');
    }
});


