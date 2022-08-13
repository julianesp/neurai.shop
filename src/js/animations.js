const header = document.querySelector(".header");
const burgerMenu = document.querySelector("#burger-menu");

burgerMenu.addEventListener("click", hideShow);

function hideShow(burger) {
    if (header.classList.contains("is-active")) {
        header.classList.remove("is-active");
    } else {
        header.classList.add("is-active");
    }
}