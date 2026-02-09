function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    
    img.src = src;
    lightbox.classList.remove('hidden');
    
    // Smooth fade in
    setTimeout(() => {
        lightbox.classList.add('opacity-100');
        img.classList.remove('scale-95');
        img.classList.add('scale-100');
    }, 10);
    
    // Disable scrolling when open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    
    lightbox.classList.remove('opacity-100');
    img.classList.add('scale-95');
    
    setTimeout(() => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 500);
}

// Ensure icons work inside the lightbox
lucide.createIcons();