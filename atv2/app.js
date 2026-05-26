const form = document.querySelector('#formCadastro');
// Funções auxiliares — evoluem o classList da Aula 11
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
