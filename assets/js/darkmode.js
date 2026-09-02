// Controle de Tema (Claro e Escuro)
const btnDarkMode = document.getElementById("btn-dark-mode");

function atualizarTextoBotaoTema() {
    if (!btnDarkMode) {
        return;
    }

    if (document.body.classList.contains("dark-theme")) {
        btnDarkMode.textContent = "☀️";
    } else {
        btnDarkMode.textContent = "🌙";
    }
}

// Carrega tema salvo no localStorage
if (localStorage.getItem("modoEscuro") === "ativado") {
    document.body.classList.add("dark-theme");
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("dark-theme")) {
        if (typeof aplicarTemaSaudacao === "function") {
            aplicarTemaSaudacao();
        }
    }

    if (btnDarkMode) {
        atualizarTextoBotaoTema();

        btnDarkMode.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");

            if (typeof aplicarTemaSaudacao === "function") {
                aplicarTemaSaudacao();
            }

            atualizarTextoBotaoTema();

            if (document.body.classList.contains("dark-theme")) {
                localStorage.setItem("modoEscuro", "ativado");
            } else {
                localStorage.setItem("modoEscuro", "desativado");
            }
        });
    }
});
