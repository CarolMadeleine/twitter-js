window.addEventListener("load", function(){
    var boton = document.getElementById("enviar");
    var mensaje = document.getElementById("mensaje");
    boton.addEventListener("click", function(e){
    	e.preventDefault();
 		var contenedor = mensaje.value;
        box(contenedor);
        mensaje.value="";
        boton.disabled ="true";
        textoNormal();
    });
    function box(contenedor){
    	var div = document.createElement("div");
    	div.innerText = contenedor;
    	var resultado = document.getElementById("resultado");
    	var n = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
        div.innerText = contenedor + "  " + n;
    	resultado.insertBefore(div, resultado.childNodes[0]);

    }
    mensaje.addEventListener("keyup", function(){
    	boton.disabled = false;
    	var limite = 140;
    	var longitud = mensaje.value.length;
    	var contador = document.getElementById("contador");//140

    	if (longitud<=limite) {
    		contador.innerText = limite - longitud;
    	}else{
    		contador.innerText = limite - longitud;
    	}
    	if(longitud > limite){
    		boton.disabled = true;	
    	}
    	if(longitud >=120){
    		contador.style.color = "blue";
    	}else{
    		contador.style.color = "#BBC5CD";
    	}
    	if(longitud >=130){
    		contador.style.color = "green";
    	}
    });

    mensaje.addEventListener("keydown", textoGrande);

 	function textoGrande(){
 		mensaje.style.cssText = "height:auto";
     	mensaje.style.cssText = "height: " + mensaje.scrollHeight + "px";
	}
	function textoNormal(){
 		mensaje.style.cssText = "height:auto";
	}
});

