import './style.css';
import { refresh, clear } from './modules/elements';
import { createScore, displayScore } from './modules/promises';

window.addEventListener('load', () => {
  refresh.click();
});

refresh.addEventListener('click', () => {
  document.getElementById('score-list').innerHTML = '';
  displayScore();
});
createScore();

clear.addEventListener('click', () => {
  document.getElementById('score-list').innerHTML = '';
});