const animacao = document.querySelectorAll("[data-anime]");

function animeScroll() {
    const topPagina = window.pageYOffset + (window.innerHeight * 3) / 4;

    animacao.forEach(function (elemento) {

        if (topPagina > elemento.offsetTop) {
            elemento.classList.add('animate');
        } else {
            elemento.classList.remove('animate')
        }
    });
}

animeScroll();

if (animacao.length) {
    window.addEventListener('scroll', () => {
        animeScroll();
    });
}

/*mensagem */
var date = new Date();
var hora = date.getHours();
var mensagem = document.getElementById('x');

function mensagemHora() {
    if ((hora > 11) && (hora < 19)) {
        mensagem.innerHTML = "Boa Tarde";

    } else if ((hora > 18) && (hora < 24)) {
        mensagem.innerHTML = "Boa Noite";

    } else if ((hora > 4) && (hora < 12)) {
        mensagem.innerHTML = "Bom Dia";
    } else {
        mensagem.innerHTML = "Boa Madrugada";
    }
}

mensagemHora();

function escrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';

    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 200 * i);
    });
}

escrever(mensagem);