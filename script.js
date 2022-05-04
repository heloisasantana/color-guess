// Requisito 4 - Referências consultadas: https://www.w3schools.com/js/js_random.asp e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

window.onload = carregandoCoresIniciais;

function coresIniciais() { 
   let red = Math.floor(Math.random() * 255);
   let green = Math.floor(Math.random() * 255);
   let blue = Math.floor(Math.random() * 255);
   let rgb = "rgb("+red+","+green+","+blue+")";
   return rgb
} 

function carregandoCoresIniciais() {
let bolas = document.getElementsByClassName("ball"); 
for (let indice = 0; indice < bolas.length; indice += 1) {
bolas[indice].style.backgroundColor = coresIniciais()
}
}