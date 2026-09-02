// Filtro de busca dinâmica para tabela e serviços
document.addEventListener("DOMContentLoaded", function () {
    const inputFiltro = document.getElementById("campoBusca") || document.getElementById("filtro");
    const formBusca = document.querySelector(".busca");
    const linhasTabela = document.querySelectorAll("tbody tr");
    const botoesServico = document.querySelectorAll(".botao-servico");

    if (formBusca) {
        formBusca.addEventListener("submit", function (event) {
            event.preventDefault();
        });
    }

    if (inputFiltro) {
        inputFiltro.addEventListener("input", function () {
            const termoDigitado = inputFiltro.value.toLowerCase();

            // Filtra linhas da tabela
            if (linhasTabela.length > 0) {
                for (let i = 0; i < linhasTabela.length; i++) {
                    const linha = linhasTabela[i];
                    const textoLinha = linha.textContent.toLowerCase();

                    if (textoLinha.includes(termoDigitado)) {
                        linha.style.display = "";
                    } else {
                        linha.style.display = "none";
                    }
                }
            }

            // Filtra botões de serviço (profissões na imagem/texto)
            if (botoesServico.length > 0) {
                for (let i = 0; i < botoesServico.length; i++) {
                    const botao = botoesServico[i];
                    const img = botao.querySelector("img");
                    let textoBusca = "";

                    if (img) {
                        textoBusca = (img.alt + " " + img.src).toLowerCase();
                    } else {
                        textoBusca = botao.textContent.toLowerCase();
                    }

                    if (textoBusca.includes(termoDigitado)) {
                        botao.style.display = "";
                    } else {
                        botao.style.display = "none";
                    }
                }
            }
        });
    }
});
