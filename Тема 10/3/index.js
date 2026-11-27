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
    prices.sort();
    showPrices();
}

function sortDescending() {
    prices.sort().reverse();
    showPrices();
}

ascending.addEventListener("click", sortAscending);
descending.addEventListener("click", sortDescending);

showPrices();