document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll(".lazy-image");
    lazyImages.forEach((image) => {
        const img = new Image();
        img.src = image.getAttribute("data-src");
        img.onload = function() {
            image.src = img.src;
            image.classList.add("loaded");
            const progressBar = image.previousElementSibling;
            progressBar.style.display = "none";
        };
    });
});
