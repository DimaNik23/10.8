const form = document.querySelector(".survey");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const rating = document.querySelector(".rating");
const comments = document.querySelector(".comments");

const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const result = document.querySelector(".result");

function checkName() {
    if (!username.value.trim()) {
        nameError.textContent = "Введите имя пользователя!";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function checkEmail() {
    if (!email.value.trim()) {
        emailError.textContent = "Введите email!";
        return false;
    }

    if (!email.validity.valid) {
        emailError.textContent = "Некорректный email!";
        return false;
    }

    emailError.textContent = "";
    return true;
}

username.addEventListener("input", checkName);
email.addEventListener("input", checkEmail);

form.addEventListener("submit", event => {
    event.preventDefault();

    const validName = checkName();
    const validEmail = checkEmail();

    result.textContent = "";

    if (!validName || !validEmail) {
        return;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    const interests = document.querySelectorAll(".interest:checked");

    const selectedInterests = Array.from(interests).map(interest => interest.value);

    result.textContent = `Имя: ${username.value.trim()}
Email: ${email.value.trim()}
Пол: ${gender ? gender.value : "Не указан"}
Оценка сервиса: ${rating.value}
Интересы: ${selectedInterests.join(", ") || "Не указаны"}
Комментарии: ${comments.value || "Нет"}`;
});
