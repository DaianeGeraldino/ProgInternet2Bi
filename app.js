const form      = document.querySelector('#formCadastro');
const inputNome = document.querySelector('#inputNome');
const erroNome  = document.querySelector('#erroNome');
const lista     = document.querySelector('#lista');

// setAttribute — desativa o autocomplete do campo
inputNome.setAttribute('autocomplete', 'off');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  cadastrar();
});

function cadastrar() {
  const nome = inputNome.value.trim();

  if (nome === '') {
    erroNome.classList.remove('oculto'); // mostra o erro
    return;
  }
  erroNome.classList.add('oculto'); // esconde o erro

  // próximo passo
}

