var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d8/Capit%C3%A3o_Am%C3%A9rica_O_Primeiro_Vingador_-_Poster.jpg/250px-Capit%C3%A3o_Am%C3%A9rica_O_Primeiro_Vingador_-_Poster.jpg",
  "https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/91/79/19/20163665.jpg"
];

listaFilmes.push(
  "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg"
);
listaFilmes.push(
  "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27177721%27&EntityType=%27Item%27&EntityId=%276201%27&Width=720&Height=1080&device=web_browser&subscriptions=Anonymous"
);
listaFilmes.push(
  "https://upload.wikimedia.org/wikipedia/pt/9/9f/Thor_Poster.jpg"
);

//filme usado como entrada pelo navegador
/*listaFilmes.push(
  "http://4.bp.blogspot.com/-5Ve8erkXNRA/UZJLLs19YuI/AAAAAAAAAHQ/KFuqj7F7Oa8/s1600/capa.jpg"
);*/

// usando for
//for (var filmes = 0; filmes < listaFilmes.length; filmes++) {
//document.write("<img src=" + listaFilmes[filmes] + ">");
//}

// de for para while
var filmes = 0;

while (filmes < listaFilmes.length) {
  document.write("<img src=" + listaFilmes[filmes] + ">");
  filmes++;
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
