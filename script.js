document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    document.querySelectorAll(".lightbox-thumb").forEach(img => {
      img.addEventListener("click", () => {
        const fullImgSrc = img.getAttribute("data-full");
        lightboxImg.src = fullImgSrc;
        lightbox.classList.remove("hidden");
      });
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === lightboxImg) {
        lightbox.classList.add("hidden");
        lightboxImg.src = "";
      }
    });
  });