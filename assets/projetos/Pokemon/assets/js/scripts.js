//passo 1 -Pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
var cartaoAtual =0;
//passo 2 identificar o clique do usuario no botao avancar

btnAvancar.addEventListener('click', function () {
    if(cartaoAtual === cartoes.length -1) return
    //fazer aparece o proximo cartao da lista
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
   
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');

//passo 4 buscar o cartão que esta selecionado e esconder

})


btnVoltar.addEventListener('click', function () {
    if( cartaoAtual === 0)return
    //fazer aparece o proximo cartao da lista
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');

//passo 4 buscar o cartão que esta selecionado e esconder


});