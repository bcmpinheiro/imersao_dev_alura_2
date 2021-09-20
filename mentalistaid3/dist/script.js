var adivinhaNumero = Math.round(Math.random() * 10);
console.log(adivinhaNumero);
var elementoResultado = document.getElementById("resultado");

var tentativas = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (adivinhaNumero === chute) {
    elementoResultado.innerHTML = "Você ACERTOU!";
    tentativas = 3;
  } else if (chute > adivinhaNumero) {
    elementoResultado.innerHTML =
      "Tente Novamente, o número secreto é menor...";
    tentativas = tentativas - 1;
  } else if (chute < adivinhaNumero) {
    elementoResultado.innerHTML =
      "Tente Novamente, o número secreto é maior...";
    tentativas = tentativas - 1;
  }
  if (tentativas < 1) {
    elementoResultado.innerHTML =
      "Não foi dessa vez ! O número secreto era o número: " +
      adivinhaNumero +
      ".";
    tentativas = 3;
  }
}
