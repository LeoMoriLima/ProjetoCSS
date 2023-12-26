const menu = document.querySelector("#menu");
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");

document.querySelector("#open").addEventListener("click", function () {
    menu.style.opacity = "0"; 
    menu.style.display = "flex";
    menu.style.width = "100%";
    menu.style.position = "fixed";
    menu.style.top = "-2%";
    menu.style.left = "-3%"

    openButton.style.display = "none";
    closeButton.style.display = "flex";

    setTimeout(() => {
        menu.style.transition = "opacity 0.3s ease";
        menu.style.opacity = "1";
    }, 50);
});

document.querySelector("#close").addEventListener("click", function () {
    menu.style.transition = "opacity 0.3s ease";
    menu.style.opacity = "0";

    setTimeout(() => {
        menu.style.transition = "";
        menu.style.width = "0";
        menu.style.display = "none";
        menu.style.position = "";
        menu.style.top = ""; 
    }, 300);

    openButton.style.display = "flex";
    closeButton.style.display = "none";
});
