const form = document.querySelector(".survey");
const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const result = document.querySelector(".result");

const dict = {
    required: val => val.trim().length > 0,
    email: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
};

function validate(validators) {
    let valid = true;

    validators.forEach(el => {
        el.error.textContent = "";

        const hasError = el.checkers.some(checker => {
            if (!dict[checker](el.field)) {
                el.error.textContent = el.messages[checker];
                return true;
            }

            return false;
        });

        if (hasError) {
            valid = false;
        }
    });

    return valid;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);

    const name = data.get("username").trim();
    const email = data.get("email").trim();

    const validators = [
        {
            field: name,
            checkers: ["required"],
            error: nameError,
            messages: {
                required: "Введите имя пользователя!"
            }
        },
        {
            field: email,
            checkers: ["required", "email"],
            error: emailError,
            messages: {
                required: "Введите email!",
                email: "Некорректный email!"
            }
        }
    ];

    result.textContent = "";

    if (!validate(validators)) {
        return;
    }

    const gender = data.get("gender");
    const rating = data.get("rating");
    const interests = data.getAll("interest");
    const comments = data.get("comments");

    result.textContent = `Имя: ${name}
Email: ${email}
Пол: ${gender || "Не указан"}
Оценка сервиса: ${rating}
Интересы: ${interests.join(", ") || "Не указаны"}
Комментарии: ${comments || "Нет"}`;
});