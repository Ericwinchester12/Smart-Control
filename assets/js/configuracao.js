document.addEventListener("DOMContentLoaded", function() {
    const botaoSalvar = document.querySelector(".btn-salvar");

    if (botaoSalvar) {
        botaoSalvar.addEventListener("click", function() {
            alert("Configurações salvas com sucesso!");
        });
    }
});
