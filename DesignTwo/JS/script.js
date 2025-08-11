// loading screen
window.addEventListener('load', function() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    const loader = document.querySelector('.loading-overlay .loader');
    
    if (loadingOverlay && loader) {
        // Fade out the loader first
        loader.style.transition = 'opacity 2s ease';
        loader.style.opacity = '0';
        
        setTimeout(function() {
            // Enable body scroll
            document.body.style.overflow = 'auto';
            
            // Fade out the entire overlay
            loadingOverlay.style.transition = 'opacity 2s ease';
            loadingOverlay.style.opacity = '0';
            
            setTimeout(function() {
                // Remove the overlay from DOM
                loadingOverlay.remove();
            }, 2000);
        }, 2000);
    }
});

// scroll btn
let btn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY >= window.innerHeight) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
});

btn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});