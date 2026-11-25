const list = document.querySelector(".list");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");

add.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Новый элемент списка";
    list.appendChild(li);
});

remove.addEventListener("click", () => {
    if (list.lastElementChild) {
        list.lastElementChild.remove();
    }
});
