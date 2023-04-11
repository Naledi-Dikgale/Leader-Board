import './style.css';
import {createGame, createScore, displayScore} from './modules/promises.js'
import {refresh, btn,addScore} from './modules/elements.js'


addScore.addEventListener('click',(event)=>{
    event.preventDefault();
    createScore();
})

displayScore();
refresh.onclick = displayScore;
btn.onclick = createGame;