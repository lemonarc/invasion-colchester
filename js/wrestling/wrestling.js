document.addEventListener('DOMContentLoaded', function () {
    const wrestlers = document.querySelectorAll('.wrestler-falling, .wrestler-flying');

    if (!wrestlers.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('wrestler-scrolled');
                } else {
                    entry.target.classList.remove('wrestler-scrolled');
                }
            });
        },
        {
            threshold: 0.25
        }
    );

    wrestlers.forEach((wrestler) => {
        observer.observe(wrestler);
    });
});