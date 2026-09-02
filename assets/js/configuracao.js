document.addEventListener("DOMContentLoaded", function() {
    const botaoSalvar = document.querySelector(".botao");

    if (botaoSalvar) {
        botaoSalvar.addEventListener("click", function() {
            alert("Configurações salvas com sucesso!");
        });
    }
});
