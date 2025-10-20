document.addEventListener('DOMContentLoaded', function() {
  const counter = document.getElementById('financial-counter');
  const targetValue = 19612.36;
  const duration = 2000; // Duration of the animation in milliseconds
  
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter();
        observer.unobserve(counter);
      }
    });
  });
  
  observer.observe(counter);
  
  function startCounter() {
    let startValue = 0;
    let startTime = null;
  
    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let value = Math.min(startValue + (targetValue * (progress / duration)), targetValue);
      counter.innerText = value.toFixed(2);
  
      if (progress < duration) {
        requestAnimationFrame(animateCounter);
      }
    }
  
    requestAnimationFrame(animateCounter);
  }

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
});