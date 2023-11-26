document.addEventListener('DOMContentLoaded', function() {
    const meuElemento = document.querySelector('#meuId');
    if (meuElemento !== null) {
      meuElemento.addEventListener('click', minhaFuncao);
    } else {
      console.error('Elemento é null.');
    }
  });