function definirCores() {
    var paragrafos = document.getElementsByTagName("p");
    var par = paragrafos.length;
    console.log(par)
}



function aparecer() {
    var paragrafos = document.getElementsByClassName("oculto")
    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.display = "block"
    }
}

function sumir() {
    var paragrafos = document.getElementsByClassName("oculto")
    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].className = ""
    }
}