import {
  scoreList, url,
} from './elements';
import 'regenerator-runtime/runtime';

const scoreForm = document.getElementById('scoreForm');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');

const displayScore = async () => {
  try {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.result.forEach((game) => {
          const scoreItem = document.createElement('li');
          scoreItem.className = 'scrore-list-item';
          scoreItem.innerHTML = `Name: ${game.user} <br/> Score: ${game.score}`;
          scoreList.appendChild(scoreItem);
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const createScore = () => {
  scoreForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          // eslint-disable-next-line quote-props
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user: inputName.value,
          score: inputScore.value,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    document.getElementById('input-name').value = '';
    document.getElementById('input-score').value = '';
  });
};

export { createScore, displayScore };