function exibirboasvindas() {
    // verifica se o nome ja esta salvo na sessao
    let usuario = sessionStorage.getItem("nomeUsuario");

    // se nao tiver salvo, pede o nome
    if (!usuario) {
        usuario = prompt("Digite seu nome:");

        // caso cancele
        if (!usuario) {
            usuario = "Estranho";
        }

        // salva no sessionStorage para nao pedir de novo ao recarregar
        sessionStorage.setItem("nomeUsuario", usuario);
    }

    //pega a data do sistema
    const data = new Date();

    const diassemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let diasemana = diassemana[data.getDay()];

    //dxa o dia e mes com 2 digitos
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();

    let hora = String(data.getHours()).padStart(2, '0');
    let minuto = String(data.getMinutes()).padStart(2, '0');

    // data sem fuso horario
    let dataatual = `${diasemana}, ${dia}/${mes}/${ano} – ${hora}:${minuto}`;
    
    let mensagem = `Olá, ${usuario}! Hoje é ${dataatual}.`;

    //vendo variavel no console
    console.log(mensagem);

    const main = document.querySelector("main");
    if (main) {
        const saudacao = document.createElement("p");
        saudacao.textContent = mensagem;

        //estilo basico js
        saudacao.style.textAlign = 'center';
        saudacao.style.backgroundColor = '#a4c2c9';
        saudacao.style.padding = '10px';
        saudacao.style.fontWeight = 'bold';
        saudacao.style.marginBottom = '20px';
        saudacao.style.borderRadius = '5px';

        main.prepend(saudacao);
    }
}

exibirboasvindas();

// ==========================================
// Funcionalidades Adicionadas
// ==========================================

// Verifica e aplica o modo escuro salvo no localStorage ao carregar qualquer pagina
if (localStorage.getItem("modoEscuro") === "ativado") {
    document.body.classList.add("dark-theme");
}

// 1. Menu Lateral (abrindo e fechando com JS puro)
const btnMenu = document.getElementById("btn-menu");
const menuLateral = document.querySelector(".menu-lateral");

if (btnMenu && menuLateral) {
    btnMenu.addEventListener("click", function() {
        // adiciona ou remove a classe 'aberto' no menu lateral
        menuLateral.classList.toggle("aberto");
    });
}

// 2. Dark Mode (Modo Escuro com persistencia)
const btnDarkMode = document.getElementById("btn-dark-mode");

if (btnDarkMode) {
    btnDarkMode.addEventListener("click", function() {
        // adiciona ou remove a classe 'dark-theme' no corpo da pagina
        document.body.classList.toggle("dark-theme");

        // salva a preferencia do usuario no localStorage para funcionar em todas as paginas
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("modoEscuro", "ativado");
        } else {
            localStorage.setItem("modoEscuro", "desativado");
        }
    });
}

// 3. Filtro de Busca (Tempo Real)
const inputFiltro = document.getElementById("filtro");
const formBusca = document.querySelector(".busca");
// pega todas as linhas do corpo da tabela
const linhasTabela = document.querySelectorAll("tbody tr");

// nao deixa a pagina recarregar ao dar enter na busca
if (formBusca) {
    formBusca.addEventListener("submit", function(event) {
        event.preventDefault();
    });
}

if (inputFiltro && linhasTabela.length > 0) {
    // escuta cada vez que o usuario digita algo
    inputFiltro.addEventListener("input", function() {
        // transforma o texto digitado em minusculo
        const termoDigitado = inputFiltro.value.toLowerCase();

        // passa linha por linha da tabela
        for (let i = 0; i < linhasTabela.length; i++) {
            const linha = linhasTabela[i];
            // pega o texto da linha inteira
            const textoLinha = linha.textContent.toLowerCase();

            // se o texto da linha tiver o termo digitado, a linha aparece
            if (textoLinha.includes(termoDigitado)) {
                linha.style.display = "";
            } else {
                // senao, esconde a linha
                linha.style.display = "none";
            }
        }
    });
}
