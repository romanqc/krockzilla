document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
  
    document.querySelectorAll('.lightbox-trigger').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('href');
        lightboxImg.src = imgSrc;
        lightbox.classList.remove('hidden');
      });
    });
  
    // Close lightbox when clicking anywhere on it
    lightbox.addEventListener('click', function () {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    });
  });