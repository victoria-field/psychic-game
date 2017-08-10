
 		// varables used in the program

 var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var wins = 0;
 var losses = 0;
 var guessesLeft = 10;
 var guessesSoFar = "";
 var lastComputerGuess = "nothing";
 var computerGuess = choices[Math.floor(Math.random() * choices.length)];

// This is the primary function to start the program

 document.onkeyup = function(event){
			
	var userGuess = event.key.toLowerCase();


	// This stops the user from choosing a special characters
	var alphabet = choices.join("");

	if(choices.indexOf(userGuess) < 0){

		alert("Choose a letter from a - z!");

	}

	// This links the display of the users guesses 
	guessesSoFar += userGuess;	


	// Condition statements for win lose and guesses

	if(userGuess === computerGuess){
		alert("You Won!!!"); 
		wins++;
		resetGame();

	} else {
		// alert("You are close, try again!");
		guessesLeft--;
	}

	if(guessesLeft === 0){

		losses++;
		resetGame();

	}
			
	// This is displayed on the html

	
	paintScreen(wins, losses, guessesSoFar, guessesLeft, lastComputerGuess);


	// var html = "<p> You chose: " + guessesSoFar + "</p>" +
	// 	"<p> The Computer chose " + lastComputerGuess + " on the last game.</p>" +
	//  	"<p> Wins: " + wins + "</p>" +
	//  	"<p> losses: " + losses + "</p>" +
	//  	"<p> Guesses Left: " + guessesLeft + "</p>";
		
	//  	document.querySelector("#game").innerHTML = html;





};

// This resets game without losing users information
function resetGame(){
 	lastComputerGuess = computerGuess;
 	computerGuess = choices[Math.floor(Math.random() * choices.length)];
 	guessesLeft = 10 ;
 	guessesSoFar = "";

};

function paintScreen (wins, losses, guessesSoFar, guessesLeft, lastComputerGuess) {
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
	document.getElementById('lastComputerGuess').innerHTML = lastComputerGuess;
}



