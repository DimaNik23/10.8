
const prices = [100, 500, 250, 750, 300];

const priceList = document.getElementById("priceList");

function showPrices() {
    priceList.innerHTML = "";

    prices.forEach(price => {
        const li = document.createElement("li");
        li.textContent = price;
        priceList.appendChild(li);
    });
}

showPrices();

function sortAscending() {
    prices.sort((a, b) => a - b);
    showPrices();
}

document.getElementById("ascending").addEventListener("click", sortAscending);

function sortDescending() {
    prices.sort((a, b) => b - a);
    showPrices();
}

document.getElementById("descending").addEventListener("click", sortDescending);
