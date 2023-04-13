import './style.css';
import { createGame, createScore, displayScore } from './modules/promises';
import { refresh, btn, addScore } from './modules/elements';

addScore.addEventListener('click', (event) => {
  event.preventDefault();
  createScore();
});

window.addEventListener('load', () => {
  displayScore(scores);
  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', () => {
    displayScore(scores);
  });
});
