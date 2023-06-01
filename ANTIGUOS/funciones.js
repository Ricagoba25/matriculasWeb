let fotos = ["assets/imagenes/interestelar2.jpg","assets/imagenes/interestelar3.png","assets/imagenes/interestelar4.jpg","assets/imagenes/interestelar5.jpg"]

var indice = 0;

function mostrarimg(){
element =document.getElementById("interestelar");
interestelar.src = fotos[indice];
    
}

function Cambiar(){
if (indice < fotos.length - 1){
indice++;
}else{
indice - 0;
}
mostrarimg();

}

function Regresar(){
    if (indice < fotos.length + 1){
        indice--;
    }else{
        indice + 0;
    }
    mostrarimg();

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