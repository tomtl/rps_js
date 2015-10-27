var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

var computerChoice = Math.random();

var winningCombinations = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
};

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

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