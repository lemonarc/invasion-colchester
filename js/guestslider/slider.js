let slideIndex = 0;

const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const slideCount = slideItems.length;
const slideInterval = 5000;
const transitionDuration = 1000;

let transitioning = false;

function showSlides(n) {
  if (transitioning) return;

  transitioning = true;

  slideIndex = ((n % slideCount) + slideCount) % slideCount;

  slides.style.transition = `transform ${transitionDuration}ms ease-in-out`;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;

  updateDots();

  window.setTimeout(() => {
    transitioning = false;
  }, transitionDuration);
}

function currentSlide(n) {
  showSlides(n - 1);
}

function updateDots() {
  dots.forEach((dot, index) => {
    const isActive = index === slideIndex;

    dot.classList.toggle("active", isActive);

    if (isActive) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
}

window.setInterval(() => {
  showSlides(slideIndex + 1);
}, slideInterval);

slides.style.transform = "translateX(0)";
updateDots();