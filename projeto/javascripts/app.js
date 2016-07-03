var alternado = document.querySelector('.botao-chaveador');

alternado.onclick = function(){
	var menu = document.querySelector('.js-menu');
	menu.classList.toggle('menu--exibindo');
}