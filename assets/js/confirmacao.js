// assets/js/confirmacao.js
document.addEventListener("DOMContentLoaded", function() {
    const botaoVoltar = document.querySelector(".botao");
    
    if(botaoVoltar) {
        botaoVoltar.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
