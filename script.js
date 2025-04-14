document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Lightbox click handler
  document.querySelectorAll(".lightbox-thumb").forEach(img => {
    img.addEventListener("click", () => {
      const fullImgSrc = img.getAttribute("data-full");
      lightboxImg.src = fullImgSrc;
      lightbox.classList.remove("hidden");
    });
  });

  // Close lightbox on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
      lightbox.classList.add("hidden");
      lightboxImg.src = "";
    }
  });

  // 📏 Automatically detect portrait images and add a class
  document.querySelectorAll('.image-box img').forEach(img => {
    img.onload = () => {
      const aspectRatio = img.naturalHeight / img.naturalWidth;
      if (aspectRatio > 1.2) {
        img.parentElement.classList.add('portrait');
      }
    };
    // If already cached
    if (img.complete) {
      img.onload();
    }
  });
});
