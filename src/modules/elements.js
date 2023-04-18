const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/id:57841632/scores/';
const refresh = document.getElementById('refresh');
const addScore = document.getElementById('insertScore');
const scoreList = document.getElementById('score-list');

export {
  refresh, addScore, scoreList, url,
};