document.addEventListener('DOMContentLoaded', function () {
    const imageRow = document.querySelector('.ls-image-row');

    if (!imageRow) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    imageRow.classList.add('ls-scrolled');
                } else {
                    imageRow.classList.remove('ls-scrolled');
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    observer.observe(imageRow);
});