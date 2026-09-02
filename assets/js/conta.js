const inputNome = document.getElementById("input-nome");
const inputEmail = document.getElementById("input-email");
const inputCpf = document.getElementById("input-cpf");
const btnSalvar = document.getElementById("btn-salvar");

// Carregar dados previamente salvos
const nomeSalvo = localStorage.getItem("conta_nome") || sessionStorage.getItem("nomeUsuario");
const emailSalvo = localStorage.getItem("conta_email");
const cpfSalvo = localStorage.getItem("conta_cpf");

if (inputNome && nomeSalvo) {
    inputNome.value = nomeSalvo;
}
if (inputEmail && emailSalvo) {
    inputEmail.value = emailSalvo;
}
if (inputCpf && cpfSalvo) {
    inputCpf.value = cpfSalvo;
}

// Salvar as alterações ao clicar no botão Salvar
if (btnSalvar) {
    btnSalvar.addEventListener("click", function () {
        if (inputNome) {
            localStorage.setItem("conta_nome", inputNome.value);
            sessionStorage.setItem("nomeUsuario", inputNome.value);
        }
        if (inputEmail) {
            localStorage.setItem("conta_email", inputEmail.value);
        }
        if (inputCpf) {
            localStorage.setItem("conta_cpf", inputCpf.value);
        }

        alert("Dados salvos com sucesso!");
    });
}

