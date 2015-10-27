var userChoice = validUserChoice();
console.log("You chose " + userChoice);
var computerChoice = computerChooses();
console.log("Computer chose " + computerChoice)
var result = compare(userChoice, computerChoice)
console.log(result)

function validUserChoice(userChoice) {
    userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
            var userChoice = prompt("Invalid input. Do you choose 'rock', 'paper' or 'scissors'?").toLowerCase();
        }
    }
    return userChoice;
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
