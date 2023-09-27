import {
  scoreList, url,
} from './elements';
import 'regenerator-runtime/runtime';

const scoreForm = document.getElementById('scoreForm');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');

// Add an event listener to the input field
inputScore.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  // Use a regular expression to allow only numbers
  const numericInput = inputValue.replace(/[^0-9]/g, '');
  // Update the input field value
  e.target.value = numericInput;
});

const displayScore = async () => {
  try {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.result.forEach((game) => {
          const scoreItem = document.createElement('li');
          scoreItem.className = 'scrore-list-item';
          scoreItem.innerHTML = `Name: ${game.user} <br/> Score: ${game.score}`;
          if (game.score === 0) {
            scoreItem.innerHTML = '';
          }

          else if (parseInt(game.score)) {
            scoreList.appendChild(scoreItem);
          }
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