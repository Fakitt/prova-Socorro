let nome = document.getElementById("nome");
let reposta = document.getElementById("Resposta");

function Apertar()
{
    Resposta.innerHTML = "olá, "+ nome.value + " tudo bem?";
}

let n1 = document.getElementById("triteza")
let n2 = document.getElementById("sucessor")
let n3 = document.getElementById("antecessor")

function Mostre()
{
    n2.innerHTML = parseInt (triteza.value) +1
    n3.innerHTML = parseInt (triteza.value) -1
}

