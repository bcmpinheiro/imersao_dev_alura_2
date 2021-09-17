var adivinhaNumero = Math.round(Math.random() * 10);
console.log(adivinhaNumero);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  var tentativas = 3;

  while (tentativas) {
    var tentativas = parseInt(chute);

    if (adivinhaNumero == chute) {
      elementoResultado.innerHTML = "Você ACERTOU!";
      break;
    } else if (chute > adivinhaNumero) {
      elementoResultado.innerHTML =
        "Tente Novamente, o número secreto é menor...";
      tentativas = tentativas - 1;
    } else if (chute < adivinhaNumero) {
      elementoResultado.innerHTML =
        "Tente Novamente, o número secreto é maior...";
      tentativas = tentativas - 1;
    }
  }

  if (chute != adivinhaNumero) {
    elementoResultado.innerHTML =
      "Não foi dessa vez ! O número secreto era o número: " +
      adivinhaNumero +
      ".";
  }
}
