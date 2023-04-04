const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const pScore = document.querySelector('.userScore');
    const cScore = document.querySelector('.computerScore');
    
    function displayScore() {
        pScore.textContent = `Player: ${playerScore}`;
        cScore.textContent = `Computer: ${computerScore}`;
    }
    displayScore();
    
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissor = document.querySelector('.scissor');
    const result = document.querySelector('.results');
    
    rock.addEventListener('click', e => {
        playRound('Rock', getComputerChoice());
    })
    paper.addEventListener('click', e => {
        playRound('Paper', getComputerChoice());
    })
    scissor.addEventListener('click', e => {
        playRound('Scissors', getComputerChoice());
    })
    
    function getComputerChoice(){
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random()*choices.length)];
    }

    function winner(){
        if(playerScore > 4 && playerScore > computerScore){
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;
            result.textContent = `Player Wins!`
        } else if(computerScore > 4 && computerScore > playerScore){
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;
            result.textContent = `Computer Wins!`
        }
    }

    function playRound(player, computer){
        
        if(player === computer){
            result.textContent = `It's a tie!`
            displayScore();
        }
        else if(player === "Rock"){
            if(computer === "Paper"){
                computerScore++;
                displayScore();
                result.textContent = `You Lose! Paper beats Rock.`;
                winner();
            } else {
                playerScore++;
                displayScore();
                result.textContent = `You Win! Rock beats Scissors.`;
                winner();
            }
        } else if (player === "Paper"){
            if(computer === "Scissors"){
                computerScore++;
                displayScore();
                result.textContent = `You Lose! Scissors beats Paper.`
                winner(); 
            } else {
                playerScore++;
                displayScore();
                result.textContent = `You Win! Paper beats Rock.`
                winner();
            }
        } else if (player === "Scissors"){
            if(computer === "Rock"){
                computerScore++;
                displayScore();
                result.textContent = `You Lose! Rock beats Scissors.`
                winner();
            } else {
                playerScore++;
                displayScore();
                result.textContent = `You Win! Scissor beats Paper.`
                winner();
            }
        }
    }
}

game();