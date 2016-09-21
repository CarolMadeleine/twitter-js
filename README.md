## twitter-js

####Contexto: Generar Versiones de Twitter.

**Versión 0.0.1:**
* Diseñar un formulario que tenga un textarea y un botón. *
* Agregar un evento de click al botón o un evento de submit al formulario. *
* En el evento, coger el texto del textarea. *
* Agegar el texto al HTML. *

###Imagen 
![Twitter](http://i65.tinypic.com/33ws2mr.png)

 * Creamos la variables que albergaran a todos nuestro Tweet *
```javascript
  window.addEventListener("load", function(){
    var boton = document.getElementById("enviar");
    var mensaje = document.getElementById("mensaje");
    var resultado = document.getElementById("caja");
    });
```
* Creamos un evento click *
```javascript
boton.addEventListener("click", function(e){
    	e.preventDefault();
 		var contenedor = mensaje.value;
        box(contenedor);
        mensaje.value="";
        boton.disabled ="true";
        textoNormal();
    });
```

**Versión 0.0.2:**
* No ingresar texto vacío (deshabilitar el botón de enviar). *
* Contar la cantidad de caracteres de forma regresiva. *

###Imagen 2 
![Twitter2](http://i63.tinypic.com/2r41phh.png)

 * Creamos un evento que genere la cuenta regresiva de caracteres. *
```javascript
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
```

**Versión 0.0.3:**
* Si pasa los 140 caracteres, deshabilitar el botón. *
* Si pasa los 120 caracteres, mostrar el contador con OTRO color. *
* Si pasa los 130 caracteres, mostrar el contador con OTRO color. *
* si pasa los 140 caracteres, mostrar el contador en negativo. *


** Ya primero habiendo creado la función que desabilite el boton **
```javascript
if(longitud > limite){
    		boton.disabled = true;	
    	}
```
 * Creamos una condición que pasando los 120 caracteres, se convierta en azul el texto*
```javascript
    	if(longitud >=120){
    		contador.style.color = "blue";
    	}
```
###Imagen 3
![Twitter2](http://i68.tinypic.com/33dxug6.png)

 * Luego creamos una condición que pasando los 130 caracteres, se convierta en verde el texto*
```javascript
    	if(longitud >=130){
    		contador.style.color = "green";
    	}
```
###Imagen 4
![Twitter2](http://i63.tinypic.com/2r41phh.png)

**Versión 0.0.5:**
* Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto,
debe de agregarse una línea más para que no aparezca el scroll. (Si en caso aplica) *

###Imagen 5
![Twitter2](http://i68.tinypic.com/2rft186.png)

 * Generamos el evento para agregarse una línea más y que no aparezca el scroll *
```javascript
  mensaje.addEventListener("keydown", textoGrande);
 	function textoGrande(){
 		mensaje.style.cssText = "height:auto";
     	mensaje.style.cssText = "height: " + mensaje.scrollHeight + "px";
	}
	function textoNormal(){
 		mensaje.style.cssText = "height:auto";
	}
```

**Versión 0.0.6:**
* Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm *

###Imagen 6
![Twitter2](http://i66.tinypic.com/25twb3m.png)

 * Generamos una variable que la computadora ya reconoce como la hora *
```javascript
  var horaActual = new Date ();
        var hora = horaActual.getHours();
        var minuto = horaActual.getMinutes();
        var horaContenedor = document.createElement("span");
        horaContenedor.classList.add("hora")
        horaContenedor.innerHTML= hora + ":"+ minuto;
        newTweet.insertBefore(horaContenedor, newTweet.childNodes[0]);
```





