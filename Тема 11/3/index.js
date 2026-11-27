const input = document.querySelector(".card-text");
const select = document.querySelector(".card-color");
const card = document.querySelector(".card");

input.addEventListener("input", () => {
    card.textContent = input.value;
});

input.addEventListener("focus", () => {
    input.classList.add("active");
});

input.addEventListener("blur", () => {
    input.classList.remove("active");
});

select.addEventListener("change", () => {
    card.style.backgroundColor = select.value;
});