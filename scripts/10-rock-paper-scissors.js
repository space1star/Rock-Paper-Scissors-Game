let score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    losses: 0,
    ties: 0         
};

updateScoreEle();


//Function
function playGame(playerMove )
{
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'scissors'){

        if(computerMove === 'paper'){
            result = 'You win.';
        }
        else if(computerMove === 'rock'){
            result = 'You lose.';
        }
        else{
            result = 'Tie.';
        }
    }

     if(playerMove === 'paper'){
            if(computerMove === 'paper'){
            result = 'Tie.';
        }
        else if(computerMove === 'rock'){
            result = 'You win.';
        }
        else{
            result = 'You lose.';
        }

    }

    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
        result = 'Tie.';
    }
    else if(computerMove === 'paper'){
        result = 'You lose.';
    }
    else{
        result = 'You win.';
    }
    }

    //update the score
    if(result === 'You win.')
       score.wins++;
    else if(result === 'You lose.')
       score.losses++;
    else 
      score.ties++;

    //coz, localStorage only supports strings
      localStorage.setItem('Score', JSON.stringify(score)); 

    //DOM
      document.querySelector('.js-result').innerHTML = result;

      //Modifications 
      document.querySelector('.js-moves').innerHTML = 
      `You
       <img src="images/${playerMove}-emoji.png" class="move-img">
       <img src="images/${computerMove}-emoji.png" class="move-img">
       Computer`;
      updateScoreEle();
}

function updateScoreEle(){
    document.querySelector('.js-score')
       .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function resultEle(){
    document.querySelector('.js-result').innerHTML = `${result}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber <= 1/3){
        //computer will pickup rock
        computerMove = 'rock';
    }
    else if(randomNumber <= 2/3){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }

    console.log(computerMove);
    return computerMove;
}