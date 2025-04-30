const textosBotoes = {
  RENT: "Alugar",
  RETURN: "Devolver",
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
