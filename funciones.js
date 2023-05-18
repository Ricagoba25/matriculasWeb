function Cambiar(){
    element =document.getElementById("interestelar");
    element.src="assets/imagenes/interestelar2.jpg";
}

function Regresar(){
    element =document.getElementById("interestelar");
    element.src="assets/imagenes/interestelar.jpg";
}


function fondo1(){
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = "#43BE1B";
}

function fondo2(){
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = "#867AB5";
}

function ocultar(){
    element = document.getElementById("mundo").style.display = 'none';


}
function mostrar(){
    element = document.getElementById("mundo").style.display = 'block';
}

function mostrardi(){
    element = document.getElementById("miDiv").style.display = 'block';
}

function ocultardi(){
    element = document.getElementById("miDiv").style.display = 'none';
}

function cambiarti(){
    element = document.getElementById("titulo").innerHTML = "La Mejor Pelicula";
}

function regresarti(){
    element = document.getElementById("titulo").innerHTML = "Mi Pelicula Favorita";
}