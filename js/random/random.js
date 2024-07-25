document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const items = Array.from(gallery.children);

    // Function to shuffle the array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the gallery items
    shuffle(items);

    // Remove existing items
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }

    // Append shuffled items
    items.forEach(item => gallery.appendChild(item));
});
