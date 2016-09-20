window.addEventListener("load", function(){
    var boton = document.getElementById("enviar");
    boton.addEventListener("click", function(e){
    	e.preventDefault();
        var texto = document.getElementById("mensaje").value;
        var box = document.getElementById("resultado");
    });
});

