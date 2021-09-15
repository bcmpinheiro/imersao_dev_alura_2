function conversaoDolar() {
  var valorReal = document.getElementById("real").value;
  let valorDolar = valorReal * 5.25;

  document.getElementById("dolar").value = "Dolar = " + valorDolar.toFixed(2);
}

function conversaoEuro() {
  var valorReais = document.getElementById("reais").value;
  let valorEuro = valorReais * 6.19;

  document.getElementById("euro").value = "Euro = " + valorEuro.toFixed(2);
}

function conversaoBitcoin() {
  var vlReais = document.getElementById("r").value;
  let valorBitcoin = vlReais * 247517.37;

  document.getElementById("bitcoin").value =
    "Bitcoin = " + valorBitcoin.toFixed(2);
}