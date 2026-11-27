const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "img/discount.svg"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "img/discount_2.svg"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "img/gift.svg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "img/delivery.svg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "img/discount_3.svg"
    }
];

const container = document.querySelector(".container");

function showGift() {
    const index = Math.floor(Math.random() * giftArr.length);
    const gift = giftArr[index];

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = gift.icon;
    img.alt = "Подарок";

    const content = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = gift.title;

    const button = document.createElement("button");
    button.textContent = "Отлично!";

    content.appendChild(title);
    content.appendChild(button);

    card.appendChild(img);
    card.appendChild(content);

    container.appendChild(card);

    button.addEventListener("click", () => {
        card.remove();
    });
}

setTimeout(showGift, 3000);