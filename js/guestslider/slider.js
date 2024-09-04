let slideIndex = 1;
let slideCount = 5; // Total number of unique slides
let transitioning = false;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlides(n) {
    if (transitioning) return;

    transitioning = true;

    slideIndex = n;

    if (slideIndex > slideCount + 1) {
        slideIndex = 2; // Jump to the second slide (index 1 in JavaScript, +1 because of extra slide)
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-200vw)`;
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease-in-out';
            slides.style.transform = `translateX(-300vw)`;
            setTimeout(() => transitioning = false, 1000); // Wait for transition to finish
        }, 50);
        return;
    }

    if (slideIndex < 0) {
        slideIndex = slideCount - 1; // Jump to the last slide (index slideCount-1 in JavaScript)
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${(slideCount) * 100}vw)`;
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease-in-out';
            slides.style.transform = `translateX(-${(slideCount - 1) * 100}vw)`;
            setTimeout(() => transitioning = false, 1000); // Wait for transition to finish
        }, 50);
        return;
    }

    slides.style.transform = `translateX(${-100 * slideIndex}vw)`;
    setTimeout(() => transitioning = false, 1000); // Wait for transition to finish

    updateDots();
}

function currentSlide(n) {
    showSlides(n);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === (slideIndex - 1) % slideCount) {
            dot.classList.add('active');
        }
    });
}

setInterval(() => {
    showSlides(slideIndex + 1);
}, 5000); // Change image every 5 seconds

// Initialize
showSlides(slideIndex);
