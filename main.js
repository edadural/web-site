let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

menu.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};

// Header Background Change On Scroll
let header = document.querySelector("header");

window.addEventListener("scrool", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});
