function enviarNota() {
    let nota = document.querySelector("#mensagem");
    let notaValor = nota.value;
  
    if (notaValor === "") {
        alert("Por favor, insira uma nota!");
    } else if (notaValor < 0 || notaValor > 10) {
        alert("A nota digitada é inválida, insira uma nota válida!");
    } else {
        contador += 1;
        soma += parseFloat(notaValor);
        let textarea = document.querySelector("#textarea");
        let text = document.createTextNode(`A nota ${contador} foi ${parseFloat(notaValor)}\n`);
        textarea.appendChild(text);
    }
}
  
function media() {
    total = soma / contador;
    document.getElementById("mediaH2").innerHTML = ("A média é: " + total.toFixed(2));
}
  
let total = 0;
let soma = 0;
let contador = 0;
  
  
let btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => enviarNota());
  
let calcularMedia = document.querySelector(".calcularMedia");
calcularMedia.addEventListener("click", () => media());
  