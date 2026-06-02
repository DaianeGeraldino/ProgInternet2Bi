const form = document.querySelector('#formCadastro');
const inputCEP = document.querySelector('#inputCEP');
const statusCEP = document.querySelector('#statusCEP');
const erroCEP = document.querySelector('#erroCEP');
// Mesmas funções auxiliares da Aula 12
function mostrarErro(inputId, erroId, msg) {
    document.querySelector(inputId).classList.add('campo-erro');
    document.querySelector(inputId).classList.remove('campo-ok');
    const span = document.querySelector(erroId);
    span.textContent = msg;
    span.classList.remove('oculto');
}
function limparErro(inputId, erroId) {
    document.querySelector(inputId).classList.remove('campo-erro');
    document.querySelector(inputId).classList.add('campo-ok');
    document.querySelector(erroId).classList.add('oculto');
}
function limparEndereco() {
    document.querySelector('#logradouro').value = '';
    document.querySelector('#bairro').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#uf').value = '';
}