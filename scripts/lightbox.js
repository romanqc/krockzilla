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

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href*="youtube"], a[href*="vimeo"]').forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  });