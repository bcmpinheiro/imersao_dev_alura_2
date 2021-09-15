function conversao(){
var valorAnosLuz =
document.getElementById("anosLuz").value;
let valorKm = valorAnosLuz * 9.46;

document.getElementById("valorKm").value = "Anos-Luz = " + valorKm.toFixed(2);
};




//var distance = parseFloat(prompt('Digite a quantidade de anos-luz que deseja converter em Km:'))

// result = (distance*9.46).toFixed(2)

// alert(distance +' anos-luz em Km é ' + result +' trilhoes de Km')