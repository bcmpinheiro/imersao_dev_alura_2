var jogador01 = {
  nome: "Jogador 01",
  vitorias: 2,
  empates: 5,
  derrotas:1,
  pontos: 0
}

var jogador02 = {
  nome: "Jogador 02",
  vitorias: 3,
  empates: 5,
  derrotas:2,
  pontos: 0
}

var jogador03 = {
  nome: "Jogador 03",
  vitorias: 2,
  empates: 5,
  derrotas:1,
  pontos: 0
}

var jogador04 = {
  nome: "Jogador 04",
  vitorias: 1,
  empates: 2,
  derrotas: 3,
  pontos: 0,
}

jogador01.pontos = calculaPontos(jogador01)
jogador02.pontos = calculaPontos(jogador02)
jogador03.pontos = calculaPontos(jogador03)
jogador04.pontos = calculaPontos(jogador04)

function calculaPontos(jogador){
  var pontos = (jogador.vitorias *3) + jogador.empates
  return pontos
}

var jogadores = [jogador01, jogador02, jogador03, jogador04]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
   }
   var tabelaJogadores = document.getElementById("tabelaJogadores")
   tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)

}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}

//Fazer a lógica de quando houver um empate, obrigatóriamente deveria já ajustar como empate para os demais jogadores
//Validar se todos os pontos estão fazendo sentido, tanto o número de empates, quanto derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo)
//Adicionar a imagem de cada jogador
//Criar um botão para zerar todos os pontos
//Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados
//Utilizar seu jogo preferido para se basear na pontuação da sua tabela de classificação



  