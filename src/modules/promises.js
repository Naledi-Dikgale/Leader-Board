import {score, user, scoreList} from './elements.js'

const displayScore = async () => {
    let scores = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/id:${localStorage.getItem("gameId")}/scores/`);
    let scoreobj = await scores.json();
    scoreList.innerHTML = '';
    scoreobj.result.forEach((scoreListItem) => {
        let scoreItem = document.createElement('li');
        scoreItem.className = 'scrore-list-item';
        scoreItem.innerHTML = `Name: ${scoreListItem.user} <br/> Score: ${scoreListItem.score}`;
        scoreList.appendChild(scoreItem);
    });
};


const createGame = async () => {
    const inp = document.querySelector(".gameName");
    let request = {
        method: "POST",
        body: JSON.stringify({
            name: inp.value.toString()
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    let postResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', request);

    let postobj = await postResponse.json();
    localStorage.setItem("gameId", postobj.result.split(' ')[3].toString());
    let gid = localStorage.getItem("gameId");
    console.log(gid);
}


const createScore = async () => {

    let request = {
        method: "POST",
        body: JSON.stringify({
            user: user.value.toString(),
            score: score.value.toString()
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    let postResponse = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/id:${localStorage.getItem("gameId")}/scores/`, request);

    let postobj = await postResponse.json();
    
    console.log(postobj);
    displayScore()
}




export {createGame, createScore, displayScore}