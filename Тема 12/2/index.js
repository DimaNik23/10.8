const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
};

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
    const valid = value === promocodeObj.promocode;

    form.classList.toggle("active", valid);

    if (valid) {
        message.textContent = `Промокод активирован! ${promocodeObj.gift}`;
    } else {
        message.textContent = "";
    }

    return valid;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);
    const promocode = data.get("promocode");

    if (applyPromocode(promocode)) {
        document.cookie = `promocode=${promocode}; max-age=2592000; SameSite=Lax`;
    } else {
        document.cookie = "promocode=; max-age=0; SameSite=Lax";
    }
});

const cookie = getCookie();

if (cookie.promocode === promocodeObj.promocode) {
    input.value = cookie.promocode;
    applyPromocode(cookie.promocode);
}