let userWin = 0;

let computerWin = 0;

// This variable for storing score of player and computer

function computerPlay() {

	const choose = ["rock", "paper", "scissors"];

	let compChoose = Math.floor(Math.random() * 3);
	
	return choose[compChoose];

}

// Computer random picks.

function playerInput(){

	let pick = prompt("Choose yours weapon.. I recommended to you to open the console.").toLowerCase();
	
	let playerPick = pick;
		
	let compPick = computerPlay();

	if(pick !== "rock" && pick !== "paper" && pick !== "scissors") {

		alert("Wrong input!");
		
		playerInput();
		
	} else {
	
		console.log("You choose " + playerPick + ".");

		alert("Ok, you choose " + pick + ".");
		
		playRound(playerPick, compPick);
		
	}
	
}

// Player picks.

function playRound(playerSelection, computerSelection) {

	if(playerSelection === computerSelection) {
		
		console.log("You pick " + playerSelection + " and Computer pick " + computerSelection + ", it's tie!");
	
		alert("It's tie! Play again!");
		
	} else if(playerSelection === "rock" && computerSelection === "scissors") {
	
		console.log("You pick " + playerSelection + " and Computer pick " + computerSelection + ", you win!");
		
		alert("You win!");
		
		userWin++;
		
	} else if(playerSelection === "rock" && computerSelection === "paper") {
	
		console.log("You pick " + playerSelection + " and Computer pick " + computerSelection + ", you lose!");
	
		alert("You lose!");
		
		computerWin++;
		
		
	} else if(playerSelection === "paper" && computerSelection === "rock") {
	
		console.log("You pick " + playerSelection + " and Computer pick " + computerSelection + ", you win!");
		
		alert("You win!");
		
		userWin++;
		
	} else if(playerSelection === "paper" && computerSelection === "scissors") {
	
		console.log("You pick " + playerSelection + " and Computer pick " + computerSelection + ", you lose!");
	
		alert("You lose!");
		
		computerWin++;
		
	} else if(playerSelection === "scissors" && computerSelection === "paper") {
	
		console.log("You pick " + playerSelection + " and Computer pick " + computerSelection + ", you win!");
		
		alert("You win!");
		
		userWin++;
		
	} else if(playerSelection === "scissors" && computerSelection === "rock") {
	
		console.log("You pick " + playerSelection + " and Computer pick " + computerSelection + ", you lose!");
	
		alert("You lose!");
		
		computerWin++;
		
	} else {
		
		alert("Wrong input");
	}
		
}

// Function for gameplay single round.

function game() {

	for(let i = 0; i < 5; i++) {
	
		playerInput();
	
	}
	
	if(userWin > computerWin) {
	
		alert("You won! Congratulations!");
		
	} else if(computerWin > userWin) {
	
		alert("You lose, noob!");
		
	} else {
	
		alert("Tie!");
		
	}
	
	let again = confirm("Again?");
	
	if(again === true) {
	
		userWin = 0;
		
		computerWin = 0;
		
		game();
		
	} else {
	
		alert("Thanks for playing!");
	
	}
		
}

// Function for 5 gameplay rock-paper-scissors.

game();

// Execute the programs.
