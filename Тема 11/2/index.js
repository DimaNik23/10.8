const form = document.querySelector(".product-form");
const table = document.querySelector(".product-table tbody");

form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);

    const name = data.get("name").trim();
    const weight = +data.get("weight");
    const distance = +data.get("distance");

    const required = [
        {
            value: distance,
            type: "number",
            error: "Введите правильное расстояние!"
        },
        {
            value: weight,
            type: "number",
            error: "Введите правильный вес!"
        },
        {
            value: name,
            type: "text",
            error: "Введите правильное название товара!"
        }
    ];

    const errors = [];

    required.forEach(el => {
        let valid;

        if (el.type === "text") {
            valid = /[A-Za-zА-Яа-яЁё]/.test(el.value);
        } else {
            valid = isFinite(el.value) && +el.value > 0;
        }

        if (!valid) {
            errors.push(el.error);
        }
    });

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    const cost = weight * distance / 10;
    const tr = document.createElement("tr");

    const values = [name, weight, distance, cost.toFixed(2)];

    values.forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    });

    table.appendChild(tr);
    form.reset();
});