alert(
  "Vamos calcular a média Bimestral do Aluno, para saber se o mesmo passou de Ano!"
);

var nota01 = parseFloat(prompt("Insira a pimeira nota do Aluno: "));
var nota02 = parseFloat(prompt("Insira a segunda nota do Aluno: "));
var nota03 = parseFloat(prompt("Insira a terceira nota do Aluno: "));
var nota04 = parseFloat(prompt("Insira a quarta nota do Aluno: "));

var somaDasNotas = (nota01 + nota02 + nota03 + nota04) / 4;
var notaFinal = somaDasNotas.toFixed(1);

if (notaFinal <= 6.0) {
  alert("Nota Final: " + notaFinal + " -- Aluno Reprovado!");
} else if (notaFinal >= 6.1 && notaFinal <= 10.0) {
  alert("Nota Final: " + notaFinal + " -- Aluno APROVADO!");
}