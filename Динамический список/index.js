const list = document.getElementById("list");
const add = document.getElementById("add");

add.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Новый элемент списка";
    list.appendChild(li);
});

const remove = document.getElementById("remove");

remove.addEventListener("click", () => {
    if (list.lastElementChild) {
        list.lastElementChild.remove();
    }
});
