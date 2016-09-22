window.addEventListener("load", function(){
    var boton = document.getElementById("enviar");
    var mensaje = document.getElementById("mensaje");
    var resultado = document.getElementById("caja");
    var contadorClick = 1;
    boton.addEventListener("click", function(e){

        var contadorTweet = document.getElementById("numeroContador");
        contadorTweet.innerHTML= contadorClick;
        contadorClick++;
            
    	e.preventDefault();
 		var contenedor = mensaje.value;
        box(contenedor);
        mensaje.value="";
        boton.disabled ="true";
        textoNormal();
    });
    function box(contenedor){
    	var newTweet = document.createElement("div");
    	newTweet.classList.add("caja");
    	resultado.insertBefore(newTweet, resultado.childNodes[0]);
        
    	var imagenAbajo= document.createElement("img");
        imagenAbajo.classList.add("imagent2")
        imagenAbajo.setAttribute("src", "image/t2.png")
        newTweet.insertBefore(imagenAbajo, newTweet.childNodes[0]);

        var entrada = document.createElement("div");
        entrada.classList.add("entrada")
        entrada.innerHTML= contenedor;
        newTweet.insertBefore(entrada, newTweet.childNodes[0]);

    	var horaActual = new Date ();
        var hora = horaActual.getHours();
        var minuto = horaActual.getMinutes();
        var horaContenedor = document.createElement("span");
        horaContenedor.classList.add("hora")
        horaContenedor.innerHTML= hora + ":"+ minuto;
        newTweet.insertBefore(horaContenedor, newTweet.childNodes[0]);

        var arroba = document.createElement("div");
        arroba.classList.add("arroba")
        arroba.innerHTML= "@Carol Madeleine •" + "&nbsp";
        newTweet.insertBefore(arroba, newTweet.childNodes[0]);

        var nombre = document.createElement("div");
        nombre.classList.add("nombre")
        nombre.innerHTML= " Carol Madeleine" + "&nbsp";
        newTweet.insertBefore(nombre, newTweet.childNodes[0]);

        var imagen= document.createElement("img");
        imagen.classList.add("imagenPerfil")
        imagen.setAttribute("src", "image/perfil.png")
        newTweet.insertBefore(imagen, newTweet.childNodes[0]);

        /*var imagen= document.createElement("img");
        imagen.setAttribute("src", "perfil.png");
        var bloq=document.getElementById("bloque");
        bloq.appendChild(imagen, newTweet.childNodes[0]); con html*/


    	// var n = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
        // div.innerText = contenedor + "  " + n;  // para la hora

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