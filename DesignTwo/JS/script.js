// loading screen
window.addEventListener('load', function () {
    const loadingOverlay = document.querySelector('.loading-overlay');
    const loader = document.querySelector('.loading-overlay .loader');

    if (loadingOverlay && loader) {
        // Fade out the loader first
        loader.style.transition = 'opacity 2s ease';
        loader.style.opacity = '0';

        setTimeout(function () {
            // Enable body scroll
            document.body.style.overflow = 'auto';

            // Fade out the entire overlay
            loadingOverlay.style.transition = 'opacity 2s ease';
            loadingOverlay.style.opacity = '0';

            setTimeout(function () {
                // Remove the overlay from DOM
                loadingOverlay.remove();
            }, 2000);
        }, 2000);
    }
});

// scroll btn
let btn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY >= window.innerHeight) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
});

btn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// filter the works 
let filterBtns = document.querySelectorAll('.works ul li a');
let worksContent = Array.from(document.querySelectorAll('.works .row > div'));

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        filterBtns.forEach(function (b) {
            b.classList.remove('active');
        });

        this.classList.add('active');

        const filterCategory = this.dataset.cat.substring(1);

        // Animate out all items
        worksContent.forEach(function (work) {
            work.querySelector('.work-item').classList.add('animate__animated', 'animate__fadeOut');
        });

        setTimeout(() => {
            worksContent.forEach(function (work) {
                work.querySelector('.work-item').classList.remove('animate__animated', 'animate__fadeOut');

                if (filterCategory === 'all' || work.dataset.cat.includes(filterCategory)) {
                    work.style.display = 'block';
                    work.querySelector('.work-item').classList.add('animate__animated', 'animate__fadeIn');
                } else {
                    work.style.display = 'none';
                }
            });
        }, 500); // Match this with the animation duration
    });
});