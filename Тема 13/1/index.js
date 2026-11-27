const form = document.querySelector(".film-form");
const titleInput = document.querySelector(".title");
const genreInput = document.querySelector(".genre");
const yearInput = document.querySelector(".year");
const watchedInput = document.querySelector(".watched");

const table = document.querySelector(".film-table tbody");
const sortSelect = document.querySelector(".sort-select");
const sortButton = document.querySelector(".sort-button");
const submitButton = document.querySelector(".submit-button");
const cancelButton = document.querySelector(".cancel-button");
const error = document.querySelector(".error");

const films = JSON.parse(localStorage.getItem("films")) || [];

let editingFilm = null;

const dict = {
    required: val => val.trim().length > 0,
    year: val => +val > 0 && +val % 1 === 0
};

function validate(validators) {
    const errors = [];

    validators.forEach(el => {
        const invalid = el.checkers.some(checker => !dict[checker](el.value));

        if (invalid) {
            errors.push(el.error);
        }
    });

    error.textContent = errors.join("\n");

    return errors.length === 0;
}

function saveFilms() {
    localStorage.setItem("films", JSON.stringify(films));
}

function createRow(film) {
    const tr = document.createElement("tr");

    const values = [
        film.title,
        film.genre,
        film.year,
        film.watched ? "Да" : "Нет"
    ];

    values.forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    });

    const actions = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.textContent = "Редактировать";
    editButton.classList.add("edit-button");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.classList.add("delete-button");

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    tr.appendChild(actions);

    return tr;
}

function showFilms() {
    table.innerHTML = "";

    films.forEach(film => {
        table.appendChild(createRow(film));
    });
}

function resetForm() {
    form.reset();
    editingFilm = null;
    submitButton.textContent = "Добавить";
    cancelButton.hidden = true;
    error.textContent = "";
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);

    const title = data.get("title").trim();
    const genre = data.get("genre").trim();
    const year = data.get("year");
    const watched = data.has("watched");

    const validators = [
        {
            value: title,
            checkers: ["required"],
            error: "Введите название фильма!"
        },
        {
            value: genre,
            checkers: ["required"],
            error: "Введите жанр фильма!"
        },
        {
            value: year,
            checkers: ["required", "year"],
            error: "Введите правильный год выпуска!"
        }
    ];

    if (!validate(validators)) {
        return;
    }

    const film = {
        title: title,
        genre: genre,
        year: +year,
        watched: watched
    };

    if (editingFilm !== null) {
        const index = films.indexOf(editingFilm);
        films[index] = film;

        const rows = table.querySelectorAll("tr");
        rows[index].replaceWith(createRow(film));
    } else {
        films.push(film);
        table.appendChild(createRow(film));
    }

    saveFilms();
    resetForm();
});

table.addEventListener("click", event => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    const row = button.closest("tr");
    const index = row.sectionRowIndex;
    const film = films[index];

    if (button.classList.contains("delete-button")) {
        if (editingFilm === film) {
            resetForm();
        }

        films.splice(index, 1);
        row.remove();
        saveFilms();
    }

    if (button.classList.contains("edit-button")) {
        editingFilm = film;

        titleInput.value = film.title;
        genreInput.value = film.genre;
        yearInput.value = film.year;
        watchedInput.checked = film.watched;

        submitButton.textContent = "Обновить";
        cancelButton.hidden = false;
        error.textContent = "";
    }
});

cancelButton.addEventListener("click", resetForm);

sortButton.addEventListener("click", () => {
    const field = sortSelect.value;

    films.sort((a, b) => {
        if (field === "year") {
            return a.year - b.year;
        }

        return a[field].localeCompare(b[field], "ru");
    });

    saveFilms();
    showFilms();
});

showFilms();