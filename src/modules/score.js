const addScore = (name, score, scoreList) => {
  const newScoreItem = {
    name,
    score,
  };
  scoreList.push(newScoreItem);
};

export default addScore;