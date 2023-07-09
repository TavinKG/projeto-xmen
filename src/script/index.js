const arrayPersonagem = document.querySelectorAll('.personagem');

arrayPersonagem.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior: 'smooth'});
        }
        removerSelecao();
        personagem.classList.add('selecionado');
        alterarImagemPersonagem(personagem);
        alterarNomePersonagem(personagem);
        alterarDescricaoPersonagem(personagem);
    })
})

function removerSelecao() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function alterarImagemPersonagem(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}