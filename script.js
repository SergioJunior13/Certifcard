/*Mostrar ou Ocultar as Imagens*/

var lista = document.getElementsByTagName("li");

for (var i = 0; i < lista.length; i++) {
	lista[i].setAttribute("onmouseenter", "mostrarImagem()");
	lista[i].setAttribute("onmouseleave", "ocultarImagem()");
}

function mostrarImagem() {
	var imagem = event.currentTarget.firstChild.lastChild;
	imagem.style.opacity = "1";
}

function ocultarImagem() {
	var imagem = event.currentTarget.firstChild.lastChild;
	imagem.style.opacity = "0";
}

/*Alterar Tema*/

function alterarTema() {
	document.body.classList.toggle("dark");
}