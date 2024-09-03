document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.show-car-slideshow-slide');
    const container = document.querySelector('.show-car-slideshow-container');
    let currentSlide = 0;

    function checkScroll() {
        const rect = container.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            container.style.visibility = 'visible';
            startSlideshow();
            window.removeEventListener('scroll', checkScroll);
        }
    }

    function startSlideshow() {
        // Move the first slide into view
        slides[currentSlide].style.transform = 'translateX(0)';

        // Wait for the slide to be in place, then pause for 3 seconds
        setTimeout(() => {
            slideOutCurrent();
        }, 3000); // Pause in the center for 3 seconds
    }

    function slideOutCurrent() {
        // Slide the current slide out to the left
        slides[currentSlide].style.transform = 'translateX(-100%)';

        // After the current slide has slid out, move to the next slide
        setTimeout(() => {
            // Reset the current slide position off-screen to the right
            slides[currentSlide].style.transform = 'translateX(100%)';

            // Update the index for the next slide
            currentSlide = (currentSlide + 1) % slides.length;

            // Slide in the next slide
            slides[currentSlide].style.transform = 'translateX(0)';

            // Wait for the next slide to be in place, then repeat
            setTimeout(slideOutCurrent, 3000); // Pause in the center for 3 seconds
        }, 1000); // Wait 1 second for the slide-out transition to complete
    }

    window.addEventListener('scroll', checkScroll);
});
