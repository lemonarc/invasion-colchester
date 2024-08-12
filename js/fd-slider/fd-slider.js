document.addEventListener('scroll', function() {
    const imageRow = document.querySelector('.fd-image-row');
    const imageRowPosition = imageRow.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (imageRowPosition < screenPosition) {
        imageRow.classList.add('fd-scrolled');
    } else {
        imageRow.classList.remove('fd-scrolled');
    }
});
