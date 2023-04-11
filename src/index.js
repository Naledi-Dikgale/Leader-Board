import './style.css';
import { createGame, createScore, displayScore } from './modules/promises';
import { refresh, btn, addScore } from './modules/elements';

addScore.addEventListener('click', (event) => {
  event.preventDefault();
  createScore();
});

displayScore();
refresh.onclick = displayScore;
btn.onclick = createGame;