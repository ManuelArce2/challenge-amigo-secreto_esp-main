//crear array con los nombres de los amigos
let listaAmigos = []
// funcion agregaramigo y verificar que no se repita
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }
    if (listaAmigos.includes(amigo)) {
        alert("Por favor, ingresa un nombre diferente");
        return;
    }
    listaAmigos.push(amigo);
    document.getElementById("listaAmigos").innerHTML = listaAmigos.join("<br>");
    document.getElementById("amigo").value = "";
    document.getElementById("button-add").style.backgroundColor = "#fe652b";
}       
 
//funcion para sortear amigo secreto sin repetir nombre 
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Por favor, ingresa un nombre");
        return;
    }
    let amigo = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").innerHTML = amigo;
}   
