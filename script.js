// console.log("Hello")
let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

// getComputerChoice();

function playRound(playerSelection, computerSelection){
    if(playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore += 1;
        return `You Lose! Paper beats Rock.`
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore += 1;
        return `You Lose! Scissors beats Paper.`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore += 1;
        return `You Lose! Rock beats Scissors`
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        userScore += 1;
        return `You Win! Rock beats Scissors.`
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        userScore += 1;
        return `You Win! Paper beats Rock.`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        userScore += 1;
        return `You Win! Scissors beats Paper.`
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        return `It's a tie!`
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return `It's a tie!`
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return `It's a tie!`
    } else {
        return `Incorrect Input! Please enter only the following choices: "Rock, Paper, Scissors`
    }
}


function game(){
    for(let i = 0; i < 5; i++){
        const userSelection = prompt(`Choose your weapon (Rock, Paper, Scissors): `);
        const playerSelection = userSelection.charAt(0).toUpperCase() + userSelection.slice(1).toLowerCase();
        console.log("Player's pick: " +playerSelection); 
        const computerSelection = getComputerChoice();
        console.log("Computer's pick: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + userScore);
        console.log("Computer: " + computerScore);
    }
    
    if(userScore === computerScore){
        alert(`It's a tie. \nPlayer's Score is: ${userScore} \nComputer's Score is: ${computerScore} \nTry again!`);
    } else if(userScore < computerScore){
        alert(`You Lose! \nPlayer's Score is: ${userScore} \nComputer's Score is: ${computerScore} \nTry again!`);
    } else {
        alert(`You Win! \nPlayer's Score is: ${userScore} \nComputer's Score is: ${computerScore} \n Play again!`);
    }
}
game();