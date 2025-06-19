window.addEventListener('scroll', () => {
  const section = document.querySelector('.bus-ride');
  const icon = section.querySelector('.bus-icon');

  const rect = section.getBoundingClientRect(); // position relative to viewport
  const scrollRange = 300; // total scroll distance over which animation occurs

  // Start animation when top of section enters the viewport
  const start = window.innerHeight; // i.e. scroll starts when section just enters view from bottom
  const distanceInView = start - rect.top;

  const progress = Math.min(Math.max(distanceInView / scrollRange, 0), 1); // clamp between 0–1

  // Move from right (100%) to left (0%)
  icon.style.transform = `translateX(${(1 - progress) * 100}%)`;
});
