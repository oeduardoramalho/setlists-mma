const botoes = document.querySelectorAll('.corpo__opcoes-link')
const manhaBt = document.querySelector('.--botao-manha')
const noiteBt = document.querySelector('.--botao-noite')
const secoesConteudo = document.querySelectorAll('.corpo__conteudo')
const conteudoManha = document.querySelector('.conteudo-manha')
const conteudoNoite = document.querySelector('.conteudo-noite')

let temporizador = 0.3

manhaBt.addEventListener('click', () => {
    if(manhaBt.classList.contains('opcoes-link-ativo')) {
        conteudoManha.style.animation = 'fade-out .3s forwards'
        setTimeout(manhaDisplayNone, 300)
    }else {
        conteudoManha.setAttribute('style', 'display: flex;')
        conteudoManha.style.animation = 'fade-in .3s forwards'
    }
    manhaBt.classList.toggle('opcoes-link-ativo')
    noiteBt.classList.remove('opcoes-link-ativo')
    conteudoNoite.setAttribute('style', 'display: none;')
})

noiteBt.addEventListener('click', () => {
    if(noiteBt.classList.contains('opcoes-link-ativo')) {
        conteudoNoite.style.animation = 'fade-out .3s forwards'
        setTimeout(noiteDisplayNone, 300)
    }else {
        conteudoNoite.setAttribute('style', 'display: flex;')
        conteudoNoite.style.animation = 'fade-in .3s forwards'
    }
    noiteBt.classList.toggle('opcoes-link-ativo')
    manhaBt.classList.remove('opcoes-link-ativo')
    conteudoManha.setAttribute('style', 'display: none;')
})


function manhaDisplayNone() {
    conteudoManha.setAttribute('style', 'display: none;')
}
function noiteDisplayNone() {
    conteudoNoite.setAttribute('style', 'display: none;')
}