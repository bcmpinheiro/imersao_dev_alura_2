function conversao(){
var valorC =
document.getElementById("celsius").value;
let valorF = valorC * 1.8 + 32;

document.getElementById("fah").value = "Fahrenheit = " + valorF.toFixed(2);
};
