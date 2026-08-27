function exibirboasvindas() {
    //coleta o nome do usuario
    let usuario = prompt("Digite seu nome:");

    //caso cancele
    if (!usuario) {
        usuario = "Estranho";
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

    // data sem o fuso horario
    let dataatual = `${diasemana}, ${dia}/${mes}/${ano} – ${hora}:${minuto}`;
    
    let mensagem = `Olá, ${usuario}! Hoje é ${dataatual}.`;

    //vendo variavel no console
    console.log(mensagem);

    const main = document.querySelector("main");
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

exibirboasvindas();