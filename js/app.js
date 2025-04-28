function alterarStatus(id) {
  // 1. Capturar o elemento do jogo pelo id
  const gameClicado = document.getElementById(`game-${id}`);
  // 2. Capturar a imagem do jogo dentro do elemento
  const imagem = gameClicado.querySelector(".dashboard__item__img");
  // 3. Capturar o botão do jogo dentro do elemento
  const botao = gameClicado.querySelector(".dashboard__item__button");
  // 4. Verificar status do jogo
  const statusJogo = imagem.classList.contains("dashboard__item__img--rented");
  // 5. Alterar o status do jogo
  if (statusJogo) {
    // 6. Se o jogo estiver alugado, alterar para disponível
    imagem.classList.remove("dashboard__item__img--rented");
    // 6.1 Alterar o texto do botão para "Alugar"
    botao.textContent = "Alugar";
    // 6.2 Remover a classe que estiliza o botão como "Devolver"
    botao.classList.remove("dashboard__item__button--return");
  } else {
    // 7. Se o jogo estiver disponível, alterar para alugado
    imagem.classList.add("dashboard__item__img--rented");
    // 7.1 Alterar o texto do botão para "Devolver"
    botao.textContent = "Devolver";
    // 7.2 Adicionar a classe que estiliza o botão como "Devolver"
    botao.classList.add("dashboard__item__button--return");
  }
}
