// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos un var con el array  AmigosSecretosAgregados
var AmigosSecretosAgregados = [];

function limpiardatos(){
    //Funcion para dejar caja vacia despues de capturar datos
    let limpiarCaja = document.getElementById("amigo");
    limpiarCaja.value = "";
}
function actualizarListaAmigos(){
    const lista = document.getElementById("listaAmigos");
     lista.innerHTML = ""
    for (let i =0; i < AmigosSecretosAgregados.length; i++){
        let li =document.createElement("li");
        li.textContent = AmigosSecretosAgregados[i];
        lista.appendChild(li);
    }
}

//Funcion para capturar y agregar amigos al array AmigosSecretosAgregados
function agregarAmigo(){
    //Capturar Input usuario Y limpiar input despues
    let datocapturado = document.getElementById("amigo").value;
    if (!datocapturado){
        alert("Por favor, inserte un nombre.")
    }else {
        AmigosSecretosAgregados.push(datocapturado);
        actualizarListaAmigos()
    }
    limpiardatos();
    console.log (AmigosSecretosAgregados);
}
