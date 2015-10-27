var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        var userChoice = prompt("Invalid input. Do you choose 'rock', 'paper' or 'scissors'?").toLowerCase();
    }
}

var computerChoice = Math.random() * 3;
if (computerChoice < 1) {
	computerChoice = "rock";
} else if(computerChoice < 2) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var winningCombinations = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
};

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
       return "The result is a tie!";
    } else if (winningCombinations[choice1] === choice2) {
        return "You win!";
    } else {
        return "You lose.";
    }
};

compare(userChoice, computerChoice)