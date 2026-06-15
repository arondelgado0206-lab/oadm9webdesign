const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

// open image
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// close modal when clicking background
modal.addEventListener("click", () => {
  modal.style.display = "none";
});