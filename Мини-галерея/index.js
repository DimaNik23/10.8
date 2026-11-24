const thumbnails = document.querySelectorAll(".thumbnail");
const fullImage = document.querySelector(".fullImage");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        const src = thumbnail.getAttribute("src");

        fullImage.innerHTML = "";

        const img = document.createElement("img");
        img.src = src;
        img.alt = thumbnail.alt;

        fullImage.appendChild(img);
    });
});

