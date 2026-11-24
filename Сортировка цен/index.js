const prices = [100, 500, 250, 750, 300];

const priceList = document.querySelector(".priceList");
const ascending = document.querySelector(".ascending");
const descending = document.querySelector(".descending");

function showPrices() {
    priceList.innerHTML = "";

    prices.forEach(price => {
        const li = document.createElement("li");
        li.textContent = price;
        priceList.appendChild(li);
    });
}

function sortAscending() {
    prices.sort((a, b) => a - b);
    showPrices();
}

function sortDescending() {
    prices.sort((a, b) => b - a);
    showPrices();
}

ascending.addEventListener("click", sortAscending);
descending.addEventListener("click", sortDescending);

showPrices();
