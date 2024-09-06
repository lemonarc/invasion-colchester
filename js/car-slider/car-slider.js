document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.show-car-slider-image-container');
    const section = document.querySelector('.show-car-slider-section');
    let hasScrolledToSection = false;

    function handleScroll() {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && !hasScrolledToSection) {
            hasScrolledToSection = true;
            images.forEach((image, index) => {
                setTimeout(() => {
                    image.style.transform = 'translateX(0)'; // Slide into view
                }, index * 300); // Delay each image by 300ms
            });
        }
    }

    window.addEventListener('scroll', handleScroll);
});
