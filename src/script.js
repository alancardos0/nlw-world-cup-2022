let delay = -0.5;

(function createViewStructure() {
  document.querySelector('#cards').innerHTML = createCard(createCardGame(1, 2)) + createCard(createCardGame(3, 4)) + createCard(createCardGame(3, 4)) + createCard(createCardGame(3, 4))
})()

function createCard(games) {
  delay = delay + 0.5;
  return `
   <div class="card" style="animation-delay:${delay}s">
     <h2>21/11 <span>segunda</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
  `
}

function createCardGame(scorePlayer1, scorePlayer2) {
  return `
   <li>
      <strong>${scorePlayer1}</strong>
      <img src="./assets/logo-brazil.svg"
      alt="Logo tipo da bandeira Brasileira, em Verde e Amarelo, com um globo azul e uma faixa branca escrito Ordem e Progresso.">
      <strong>08:00</strong>
      <img src="/assets/logo-cameroon.svg"
      alt="Logo tipo da bandeira Cameroon, nas cores verdes, vermelhas e amarelas, com
     uma estrela amarelada no meio.">
      <strong>${scorePlayer2}</strong>
 </li>
  `
}