// Exibe a saudação do usuário no painel principal
function exibirboasvindas() {
    let usuario = localStorage.getItem("conta_nome") || sessionStorage.getItem("nomeUsuario");

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

document.addEventListener("DOMContentLoaded", function () {
    exibirboasvindas();
});
