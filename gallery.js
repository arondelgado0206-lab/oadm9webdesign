const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});


modal.addEventListener("click", () => {
  modal.style.display = "none";
});