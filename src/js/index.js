const botao = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const link = video.src

botao.addEventListener('click', () => {
    video.setAttribute('src', link);
    modal.classList.add('aberto');
});

fechar.addEventListener('click', () => {
    video.setAttribute('src', '')
    modal.classList.remove('aberto');
});