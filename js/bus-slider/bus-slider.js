window.addEventListener('scroll', () => {
  const section = document.querySelector('.bus-ride');
  const icon = section.querySelector('.bus-icon');

  const rect = section.getBoundingClientRect();
  const scrollRange = 300;

  const start = window.innerHeight;
  const distanceInView = start - rect.top;

  const progress = Math.min(
    Math.max(distanceInView / scrollRange, 0),
    1
  );

  // Start off-screen on the right and finish centred.
  const startPosition = 100;
  const endPosition = -50;

  const currentPosition =
    startPosition + ((endPosition - startPosition) * progress);

  icon.style.transform = `translateX(${currentPosition}%)`;
});