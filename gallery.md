---
pageclass: gallery-page
layout: page
title: Invasion Colchester Gallery
excerpt: Take a look through our gallery of images from Invasion Colchester 2025. Who knows, you might even spot yourself in there somewhere!
permalink: /gallery/
featured-image: SIL_SPIDER-MAN.svg
titlecard: right
socialimage: INVASION_COLCHESTER_26_SOCIAL_GALLERY.png
lightbox: gallery
---

<div class="gallery" id="gallery">
    {% for image in site.data.gallery2025 %}
        <div class="gallery-item" data-description="Photos at Invasion Colchester">
            <img src="/images/gallery/{{ image }}" alt="Photos at Invasion Colchester">
        </div>
    {% endfor %}
</div>
<p>Images courtesy of official photographers <a href="https://www.facebook.com/p/Daniel-Reed-Photography-100077734514882/" target="_blank" rel="noopener">Daniel Reed</a> and <a href="https://www.chloesphotography.org.uk/" target="_blank" rel="noopener">Chloe Jenkins</a></p>