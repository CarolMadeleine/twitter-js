window.addEventListener("load", function(){
		var boton = document.getElementById("enviar");
		boton.addEventListener("click", function(e){
				e.preventDefault();//para que no aparezca en la url a pesar que es tipo submit
				var textArea = document.getElementById("mensaje")
				var texto = textArea.value;
				agregarMensaje(textArea.value);
				textArea.value = "";
				
		});

		function agregarMensaje (texto){
			var div = document.createElement("div");
			div.innerText = texto;
			var mensajes =  document.getElementById("mensajes");
			mensajes.insertBefore(div, mensajes.childNodes[0]);
		}
});