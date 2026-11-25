const form = document.querySelector(".product-form");
const productName = document.querySelector(".product-name");
const weight = document.querySelector(".weight");
const distance = document.querySelector(".distance");
const table = document.querySelector(".product-table tbody");

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = productName.value.trim();
    const productWeight = +weight.value;
    const productDistance = +distance.value;

    if (!name) {
        alert("Введите название товара!");
        return;
    }

    if (!isFinite(productWeight) || !isFinite(productDistance) || productWeight <= 0 || productDistance <= 0) {
        alert("Вес и расстояние должны быть положительными!");
        return;
    }

    const cost = productWeight * productDistance / 10;
    const tr = document.createElement("tr");

    const values = [
        name,
        productWeight,
        productDistance,
        cost.toFixed(2)
    ];

    values.forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    });

    table.appendChild(tr);
    form.reset();
});