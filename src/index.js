import addScore from './modules/score';

import './style.css';

const scores = [
  {
    name: 'Gift',
    score: 1,
  },
  {
    name: 'Thoriso',
    score: 2,
  },
  {
    name: 'TJ',
    score: 7,
  },
];

const displayScore = (scores) => {
  const scoreList = document.getElementById('score-list');
  scoreList.innerHTML = '';
  scores.forEach((scoreListItem) => {
    const scoreItem = document.createElement('li');
    scoreItem.className = 'scrore-list-item';
    scoreItem.innerHTML = `Name: ${scoreListItem.name}`;
    scoreList.appendChild(scoreItem);
  });
};

window.addEventListener('load', () => {
  displayScore(scores);
  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', () => {
    displayScore(scores);
  });
  const addNewScore = document.getElementById('add-new-score');
  addNewScore.addEventListener('click', (e) => {
    e.preventDefault();
    const inputName = document.getElementById('input-name');
    const inputScore = document.getElementById('input-score');
    addScore(inputName.value, inputScore.value, scores);
    inputName.value = '';
    inputScore.value = '';
    displayScore(scores);
  });
});