let pScore = 0;
let cScore = 0;
const btnR = document.getElementById('btnR');
const btnP = document.getElementById('btnP');
const btnS = document.getElementById('btnS');
const playNum = document.querySelector('#playNum');
const compNum = document.querySelector('#compNum');
const winner = document.querySelector('#winner');
const announcement = document.querySelector('#announcement');

start();

function start() {
btnR.addEventListener('click', function() {

  oneRound('ROCK');
  playNum.innerText = pScore.toString();
  compNum.innerText = cScore.toString();
  endGame();
});

btnP.addEventListener('click', function() {
  oneRound('PAPER')
  playNum.innerText = pScore.toString();
  compNum.innerText = cScore.toString();
  endGame();
});

btnS.addEventListener('click', function() {
  oneRound('SCISSORS')
  playNum.innerText = pScore.toString();
  compNum.innerText = cScore.toString();
  endGame();
});
}


function computerPlay() {
  let rpsArray = ['ROCK', 'PAPER', 'SCISSORS'];
  let rpsRandom = rpsArray[Math.floor(Math.random()*rpsArray.length)];
  return rpsRandom;
}

function oneRound(playerSelection) {
  let computerSelection = computerPlay();

  if (playerSelection + computerSelection == 'ROCKSCISSORS') {
    win();
    return pScore++;
  }
  else if (playerSelection + computerSelection == 'PAPERROCK') {
    win();
    return pScore++;
  }
  else if (playerSelection + computerSelection == 'SCISSORSPAPER') {
    win();
    return pScore++;
  }
  else if (playerSelection + computerSelection == 'ROCKPAPER') {
    lose()
    return cScore++;
  }
  else if (playerSelection + computerSelection == 'PAPERSCISSORS') {
    lose()
    return cScore++;
  }
  else if (playerSelection + computerSelection == 'SCISSORSROCK') {
    lose()
    return cScore++;
  }
  else if (playerSelection + computerSelection == 'ROCKROCK') {
    draw();
  }
  else if (playerSelection + computerSelection == 'PAPERPAPER') {
    draw();
  }
  else if (playerSelection + computerSelection == 'SCISSORSSCISSORS') {
    draw();
  }

}

function endGame() {
  if (pScore === 5 && pScore > cScore) {
    winner.innerText = "YOU WIN!";
    btnR.disabled = true;
    btnS.disabled = true;
    btnP.disabled = true;
  }
    else if(cScore === 5 && cScore > pScore) {
      winner.innerText = "COMPUTER WINS!";
      btnR.disabled = true;
      btnS.disabled = true;
      btnP.disabled = true;
    }
  
}

function win() {
  announcement.innerText = "WIN";
  console.log("WIN");
}

function lose() {
  announcement.innerText = "LOSE";
  console.log("LOSS");
}

function draw() {
  announcement.innerText = "DRAW";
  console.log("DRAW");
}


