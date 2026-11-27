const promocodeArr = [
    {
        promocode: "PROM10",
        gift: "Скидка 10%"
    },
    {
        promocode: "PROM50",
        gift: "Скидка 50%"
    },
    {
        promocode: "GIFT",
        gift: "Подарок в корзине"
    }
];

const form = document.querySelector(".promo-form");
const input = document.querySelector(".promo-input");
const message = document.querySelector(".message");

function getCookie() {
    return document.cookie.split("; ").reduce((acc, item) => {
        const [name, value] = item.split("=");
        acc[name] = value;
        return acc;
    }, {});
}

function applyPromocode(value) {
    const promo = promocodeArr.find(item => item.promocode === value);

    form.classList.toggle("active", !!promo);

    if (promo) {
        message.textContent = `Промокод активирован! ${promo.gift}`;
        return true;
    }

    message.textContent = "";
    return false;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);
    const promocode = data.get("promocode");

    if (applyPromocode(promocode)) {
        document.cookie = `promocode3=${promocode}; max-age=2592000; SameSite=Lax`;
    } else {
        document.cookie = "promocode3=; max-age=0; SameSite=Lax";
    }
});

const cookie = getCookie();

if (cookie.promocode3 && applyPromocode(cookie.promocode3)) {
    input.value = cookie.promocode3;
}