// Controle do menu lateral hamburguer
document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.getElementById("btn-menu");
    const menuLateral = document.querySelector(".menu-lateral");

    if (btnMenu && menuLateral) {
        btnMenu.addEventListener("click", function () {
            menuLateral.classList.toggle("aberto");
        });
    }
});
