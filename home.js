function goPage(page) {
    document.body.style.transition = "opacity 0.1s ease";
    document.body.style.opacity = "0.5";

    setTimeout(() => {
        window.location.href = page;
    }, 200);
}

function openModal(src) {
    document.getElementById("modalImg").src = src;
    document.getElementById("imageModal").classList.add("show");
}

function closeModal() {
    document.getElementById("imageModal").classList.remove("show");
}

function openVideoFullscreen(video) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}