const textosBotoes = {
  RENT: "Alugar",
  RETURN: "Devolver",
};
const textosFavoritos = {
  FAV: "Favoritar",
  UNFAV: "Desfavoritar",
};

function alterarStatus(id) {
  const gameClicado = document.getElementById(`game-${id}`);
  const imagem = gameClicado.querySelector(".dashboard__item__img");
  const botao = gameClicado.querySelector(".dashboard__item__button");
  const tituloElemento = gameClicado.querySelector(".dashboard__item__name");
  const nomeJogo = tituloElemento.textContent;

  const isRented = imagem.classList.contains("dashboard__item__img--rented");

  if (isRented) {
    const confirmar = confirm(
      `Você tem certeza que deseja devolver ${nomeJogo}?`
    );
    if (confirmar) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.textContent = textosBotoes.RENT;
      botao.classList.remove("dashboard__item__button--return");
    }
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.textContent = textosBotoes.RETURN;
    botao.classList.add("dashboard__item__button--return");
  }
}
function alterarFavorito(id) {
  const gameClicado = document.getElementById(`game-${id}`);
  const botaoFavorito = gameClicado.querySelector(
    ".dashboard__item__favbutton"
  );
  const tituloElemento = gameClicado.querySelector(".dashboard__item__name");
  const nomeJogo = tituloElemento.textContent;
  const isFavorito = gameClicado.classList.contains("dashboard__item__fav--on");
  if (isFavorito) {
    gameClicado.classList.remove("dashboard__item__fav--on");
    botaoFavorito.textContent = textosFavoritos.FAV;
    alert(`Você removeu ${nomeJogo} dos seus jogos favoritos"!`);
  } else {
    gameClicado.classList.add("dashboard__item__fav--on");
    botaoFavorito.textContent = textosFavoritos.UNFAV;
    alert(`Você adicionou ${nomeJogo} dos seus jogos favoritos"!`);
  }
}

function contarJogosAlugados() {
  const jogos = document.querySelectorAll(".dashboard__items__item");
  let contador = 0;
  jogos.forEach((jogo) => {
    const imagem = jogo.querySelector(".dashboard__item__img");
    const isRented = imagem.classList.contains("dashboard__item__img--rented");
    if (isRented) {
      contador++;
    }
  });
  console.log(`Total de jogos alugados: ${contador}`);
}
