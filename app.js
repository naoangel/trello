	/*var boton = document.getElemenntById('btnstart');
	boton.addEventListener('click',function({
	})*/




	var Tarea = document.getElementById('textbox')

	document.getElementById('textbox').value = '';
	//limpiar el textarea
		document.getElementById('textbox).value = '';

		//contenedor que esta en el html
		var cont = document.getElementById('cont');

		//creamos el div que contiene cada comentario
		var newComments = document.createElement('div');

		//validar que textarea tenga un msje
		if(comments.length == 0 || comments == null) {
			alert('Debes ingresar un mensaje');
			return false;

