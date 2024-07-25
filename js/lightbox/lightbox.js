document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxDescription = document.getElementById('lightbox-description');
    const close = document.querySelector('.close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let currentIndex;

    const showLightbox = (index) => {
        const item = galleryItems[index];
        const imgSrc = item.querySelector('img').src;
        const description = item.getAttribute('data-description');

        lightboxImage.src = imgSrc;
        lightboxDescription.textContent = description;
        lightbox.classList.add('show');
        lightbox.style.display = 'flex';
        currentIndex = index;

        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyDown);
    };

    const hideLightbox = () => {
        lightbox.classList.remove('show');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);

        // Remove keyboard navigation
        document.removeEventListener('keydown', handleKeyDown);
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showLightbox(currentIndex);
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showLightbox(currentIndex);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            showNext();
        } else if (event.key === 'ArrowLeft') {
            showPrev();
        } else if (event.key === 'Escape') {
            hideLightbox();
        }
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            showLightbox(index);
        });
    });

    close.addEventListener('click', hideLightbox);
    prev.addEventListener('click', showPrev);
    next.addEventListener('click', showNext);

    window.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            hideLightbox();
        }
    });
});
