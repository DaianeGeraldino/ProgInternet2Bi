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

async function buscarCEP(cep) {
    statusCEP.textContent = 'Buscando...';
    erroCEP.classList.add('oculto');
    inputCEP.classList.remove('campo-erro', 'campo-ok');
    const url = 'https://viacep.com.br/ws/' + cep + '/json/';
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (dados.erro) {
            statusCEP.textContent = '';
            mostrarErro('#inputCEP', '#erroCEP', 'CEP nao encontrado');
            limparEndereco();
            return;
        }
        statusCEP.textContent = 'Endereco encontrado!';
        inputCEP.classList.add('campo-ok');
        document.querySelector('#logradouro').value = dados.logradouro ||
            '';
        document.querySelector('#bairro').value = dados.bairro ||
            '';
        document.querySelector('#cidade').value = dados.localidade ||
            '';
        document.querySelector('#uf').value = dados.uf ||
            '';
    } catch (erro) {
        statusCEP.textContent = '';
        mostrarErro('#inputCEP', '#erroCEP', 'Erro de conexao');
        limparEndereco();
    }
}