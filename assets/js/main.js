// mostra a saudacao do usuario
function exibirboasvindas() {
    let usuario = sessionStorage.getItem("nomeUsuario");

    if (!usuario) {
        usuario = prompt("Digite seu nome:");

        if (!usuario) {
            usuario = "Estranho";
        }

        sessionStorage.setItem("nomeUsuario", usuario);
    }

    const data = new Date();
    const diassemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let diasemana = diassemana[data.getDay()];

    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();

    let hora = String(data.getHours()).padStart(2, '0');
    let minuto = String(data.getMinutes()).padStart(2, '0');

    let dataatual = `${diasemana}, ${dia}/${mes}/${ano} – ${hora}:${minuto}`;
    let mensagem = `Olá, ${usuario}! Hoje é ${dataatual}.`;

    console.log(mensagem);

    const main = document.querySelector("main");
    if (main) {
        const saudacao = document.createElement("p");
        saudacao.classList.add("saudacao");
        saudacao.textContent = mensagem;

        saudacao.style.textAlign = 'center';
        saudacao.style.backgroundColor = '#a4c2c9';
        saudacao.style.padding = '10px';
        saudacao.style.fontWeight = 'bold';
        saudacao.style.marginBottom = '20px';
        saudacao.style.borderRadius = '5px';

        main.prepend(saudacao);

        window.saudacaoDashboard = saudacao;
        aplicarTemaSaudacao();
    }
}

function aplicarTemaSaudacao() {
    const saudacao = window.saudacaoDashboard;

    if (!saudacao) {
        return;
    }

    if (document.body.classList.contains("dark-theme")) {
        saudacao.style.backgroundColor = '#1f2438';
        saudacao.style.color = '#edf2ff';
        saudacao.style.border = '1px solid #3d466d';
    } else {
        saudacao.style.backgroundColor = '#a4c2c9';
        saudacao.style.color = '#111';
        saudacao.style.border = 'none';
    }
}

// pega o tema salvo do usuario
if (localStorage.getItem("modoEscuro") === "ativado") {
    document.body.classList.add("dark-theme");
}

exibirboasvindas();

if (document.body.classList.contains("dark-theme")) {
    aplicarTemaSaudacao();
}

// abre e fecha o menu lateral
const btnMenu = document.getElementById("btn-menu");
const menuLateral = document.querySelector(".menu-lateral");

if (btnMenu && menuLateral) {
    btnMenu.addEventListener("click", function () {
        menuLateral.classList.toggle("aberto");
    });
}

// troca o tema claro e escuro
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

if (btnDarkMode) {
    atualizarTextoBotaoTema();

    btnDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        aplicarTemaSaudacao();
        atualizarTextoBotaoTema();

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("modoEscuro", "ativado");
        } else {
            localStorage.setItem("modoEscuro", "desativado");
        }
    });
}

// filtra a tabela enquanto digita
const inputFiltro = document.getElementById("campoBusca") || document.getElementById("filtro");
const formBusca = document.querySelector(".busca");
const linhasTabela = document.querySelectorAll("tbody tr");

if (formBusca) {
    formBusca.addEventListener("submit", function (event) {
        event.preventDefault();
    });
}

if (inputFiltro && linhasTabela.length > 0) {
    inputFiltro.addEventListener("input", function () {
        const termoDigitado = inputFiltro.value.toLowerCase();

        for (let i = 0; i < linhasTabela.length; i++) {
            const linha = linhasTabela[i];
            const textoLinha = linha.textContent.toLowerCase();

            if (textoLinha.includes(termoDigitado)) {
                linha.style.display = "";
            } else {
                linha.style.display = "none";
            }
        }
    });
}
