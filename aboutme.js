function openModal(src){
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal(){
  document.getElementById("imageModal").style.display = "none";
}

/* Optional: close when pressing ESC key */
document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    closeModal();
  }
});