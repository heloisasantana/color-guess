// Requisito 4 - Referências consultadas: https://www.w3schools.com/js/js_random.asp, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor e https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onload

window.onload = carregandoCoresIniciais;

function coresIniciais() { 
   let red = Math.floor(Math.random() * 255);
   let green = Math.floor(Math.random() * 255);
   let blue = Math.floor(Math.random() * 255);
   let rgb = "rgb("+red+","+green+","+blue+")";
   return rgb
} 

let textoCharada = document.getElementById("rgb-color");
let respostaMostrada = document.getElementById("answer");
let bolas = document.getElementsByClassName("ball"); 
for (let index = 0; index < bolas.length; index += 1)
{bolas[index].addEventListener('click', checkResposta)}

function carregandoCoresIniciais() {
for (let indice = 0; indice < bolas.length; indice += 1) 
{bolas[indice].style.backgroundColor = coresIniciais()}
let random = Math.floor(Math.random() * 5);
textoCharada.innerText = bolas[random].style.backgroundColor;
}

// Requisito 5
function checkResposta(event) { 
let bolaClicada = event.target;
let respostaUser = bolaClicada.style.backgroundColor;
if (textoCharada.innerText === respostaUser)
{respostaMostrada.innerText = "Acertou!"}
else 
{respostaMostrada.innerText = "Errou! Tente novamente!"} 
}
