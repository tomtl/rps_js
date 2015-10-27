var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
var computerChoice = computerChooses();
compare(userChoice, computerChoice)

function validateUserChoice(userChoice) {
    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
            var userChoice = prompt("Invalid input. Do you choose 'rock', 'paper' or 'scissors'?").toLowerCase();
        }
    }
};

function computerChooses() {
    var computerChoice = Math.random() * 3;
    if (computerChoice < 1) {
    	return "rock";
    } else if(computerChoice < 2) {
    	return "paper";
    } else {
    	return "scissors";
    }
};

function compare(userChoice, computerChoice) {
    var winningCombinations = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };

    if (userChoice === computerChoice) {
       return "The result is a tie!";
    } else if (winningCombinations[userChoice] === computerChoice) {
        return "You win!";
    } else {
        return "You lose.";
    }
};
