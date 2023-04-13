import { score, user, scoreList } from './elements';

const displayScore = async () => {
  const scores = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/id:${localStorage.getItem('gameId')}/scores/`);
  const scoreobj = await scores.json();
  scoreList.innerHTML = '';
  scoreobj.result.forEach((scoreListItem) => {
    const scoreItem = document.createElement('li');
    scoreItem.className = 'scrore-list-item';
    scoreItem.innerHTML = `Name: ${scoreListItem.user} <br/> Score: ${scoreListItem.score}`;
    scoreList.appendChild(scoreItem);
  });
};

const createGame = async () => {
  const inp = document.querySelector('.gameName');
  const request = {
    method: 'POST',
    body: JSON.stringify({
      name: inp.value.toString(),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const postResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', request);

  const postobj = await postResponse.json();
  localStorage.setItem('gameId', postobj.result.split(' ')[3].toString());
  const gid = localStorage.getItem('gameId');
  return (gid);
};

const createScore = async () => {
  const request = {
    method: 'POST',
    body: JSON.stringify({
      user: user.value.toString(),
      score: score.value.toString(),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const postResponse = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/id:${localStorage.getItem('gameId')}/scores/`, request);

  const postobj = await postResponse.json();

  return (postobj);
};

export { createGame, createScore, displayScore };