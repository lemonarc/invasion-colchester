let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slideCount = dots.length;
const slideInterval = 5000;
let transitioning = false;

function showSlides(n) {
    if (transitioning) return;
    transitioning = true;

    // Clamp slideIndex
    slideIndex = n % slideCount;

    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = `translateX(-${slideIndex * 100}vw)`;

    updateDots();

    setTimeout(() => {
        transitioning = false;
    }, 1000);
}

function currentSlide(n) {
    showSlides(n - 1);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

// Auto-advance every 5 seconds
setInterval(() => {
    showSlides(slideIndex + 1);
}, slideInterval);

// Init
showSlides(slideIndex);
