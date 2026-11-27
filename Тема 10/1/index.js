const thumbnails = document.querySelector(".thumbnails");
const fullImage = document.querySelector(".fullImage");

thumbnails.addEventListener("click", event => {
    const thumbnail = event.target.closest(".thumbnail");

    if (!thumbnail) {
        return;
    }

    const img = document.createElement("img");
    img.src = thumbnail.getAttribute("src");
    img.alt = thumbnail.alt;

    fullImage.innerHTML = "";
    fullImage.appendChild(img);
});
