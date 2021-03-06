//---FUNCTIONS DEFINED HERE---

// Prompts the players for weapons
//
// Returns nothing
function ask(){
  prompt.get(['player1', 'player2'], function (err, result) {
    displayChoices(result.player1, result.player2);
	validator(result.player1, result.player2);
});
}

// Displays the users input back to the user
//
// result1 && result2 - inputs from both prompt
//
// Example
//
// displayChoices("Shed", "Garden Hose")
//	#=> Weapons chosen!
//		---------------
//		Player 1 choice: Shed
//		Player 2 choice: Garden Hose
//
// Returns nothing
function displayChoices(result1, result2){
	console.log('\nWeapons chosen!\n---------------');
	console.log('Player 1 Choice: ' + result1);
    console.log('Player 2 Choice: ' + result2);
}

// Informs user if either weapon is invalid
//
// p1_weapon - String of player ones weapon
// p2_weapon - String of player twos weapon
//
// Example
//
// validator("gun", "yrqanm")
//	#=> ===============
//		INVALID WEAPONS
//		---------------
//
// Returns nothing
function validator(p1_weapon, p2_weapon){
	if(areValid(p1_weapon) && areValid(p2_weapon)){
      console.log("===============\n valid choices \n---------------");      
      decider(p1_weapon, p2_weapon)
    }
    else{
      console.log("===============\nINVALID WEAPONS\n---------------\n\n\n");
      ask();
    }
}

// Checks if prompt result is valid
//
// string - The string to be checked
//
// Examples
//
// areValid("paper")
//	#=> true
//
// areValid("panda")
//	#=>  false
//
// Returns boolean true or flase
function areValid(string){
  if (string == "rock" || string == "paper" || string == "scissors")
    return true
  else
    return false
}

// Decides if the weapons should be scored or if they're a draw
//
// p1_weapon - String of player ones weapon
// p2_weapon - Player two's weapon
//
// Example
//
// decider("rock", "rock")
//	#=> Draw
//		
// returns nothing
function decider(p1_weapon, p2_weapon){
	if (p1_weapon != p2_weapon){
		whoWins(p1_weapon, p2_weapon);
	}
	else{
		console.log("Draw")
		showScore();
		ask();
	}
}

// Decides who will win the round
//
// p1_weapon - The weapon of player one as a string
// p2_weapon - The weapon of player two as a string
// 
// Example
//
// whoWins("rock", "paper")
//	#=> ---SCORES---
//	    Player 1: 0
//	    Player 2: 1
//	    ^----------^
//
// Returns nothing
function whoWins(p1_weapon, p2_weapon){
	if (p1_weapon == "rock" && p2_weapon == "scissors" ||
		p1_weapon == "paper" && p2_weapon == "rock" ||
		p1_weapon == "scissors" && p2_weapon == "paper"){
		scoreAndContinue("p1")
	}
	else{
		scoreAndContinue("p2")
	}
}

// Calls score functions and the continue function
//
// player - Player to be have score increased
//
// Examples
//
// scoreAndContinue("p1")
// #=> ---SCORES---
//	   Player 1: 1
//	   Player 2: 0
//	   ^----------^
//
// Returns nothing
function scoreAndContinue(player){
	upScore(player);
	showScore();
	keepPlaying();
}

// Increases the score 
//
// player - String of the player two be increased
//
// Example
// 
// upScore("p1")
//	#=> player1Score = 1
//
// Returns nothing
function upScore(player){
	if (player == "p1"){
		return player1Score += 1;
	}
	if (player == "p2"){
		return player2Score += 1;
	}
}

// Displays the score to user
//
// Example
//
// showScore()
//	#=> ---SCORES---
//		Player 1: 0
//		Player 2: 0
//		------------
//
// Returns nothing
function showScore(){
	console.log("\n---SCORES---")
	console.log("Player 1: " + player1Score);
	console.log("Player 2: " + player2Score);
	console.log("------------\n\n\n")
}

// Checks if it should continue playing
// 
// Example
//
// player1Score = 3
// player2Score = 2
//
// keepPlaying() 
//	#=> Game Over
//
// Returns nothing
function keepPlaying(){
	if (player1Score + player2Score == 5 || player1Score == 3 || player2Score == 3){
		finalVictor(player1Score, player2Score);
	}
	else{
		ask();
	}
}

// Finds which player one
//
// p1 && p2 - String of player names 
//
// Example
//
// finalVictor("p1", "p2")
//	#=> ><><><><><><><><><><
//		P1 wins by 2 points
//		|_-_-_GAMEOVER-_-_-|
//
// 	Returns nothing
function finalVictor(p1, p2){
	switch (p1 > p2){
	case true:
		winMessage("p1", player1Score);
		break;
	case false:
		winMessage("p2", player2Score);
		break;
	}
}

// Displays the message of who won the game
//
// player - String of player who won
// score1 - Integer of score for winner
//
// Example
// 
// winMessage("p1", "50")
//	#=> ><><><><><><><><><><
//		P1 wins by 2 points
//		|_-_-_GAMEOVER-_-_-|
//
// Returns nothing
function winMessage(player, score1){
	victor = toTheVictors(player);
	console.log(
		"><><><><><><><><><><><><><><><\n"+
		victor + " wins with " + score1 + " points!\n" +
		"|_-_-_-_-_-GAMEOVER-_-_-_-_-_|\n\n\n\n");
}

// Checks who the winner is and assigns victor based of that
//
// player - String of winner
//
// Example
// 
// toTheVictors("p2")
//	#=> Player two
//
// Returns var victor
function toTheVictors(player){
	if (player == "p1"){
		var victor = "Player one"
	}
	if (player == "p2"){
		var victor = "Player two"
	}
	return victor
}

//EXECUTION STARTS HERE
require('functions.js')
var prompt = require('prompt')
var player1Score = 0;
var player2Score = 0;

ask();


//===TESTS===

// testAreValid();
// testToTheVictors();
// testUpScore();

// function testAreValid(){
// 	var expected = false
// 	var actual = areValid("Dog")

// 	if (expected == actual){
// 		console.log("areValid passed!")
// 	}
// 	else{
// 		console.log("areValid failed! Expected: " + expected + " instead got " + actual)
// 	}
// }

// function testToTheVictors(){
// 	var expected = "Player one"
// 	var actual = toTheVictors("p1")

// 	if (expected == actual){
// 		console.log("toTheVictors passed!")
// 	}
// 	else{
// 		console.log("toTheVictors failed! Expected: " + expected + " instead got " + actual)
// 	}
// }

// function testUpScore(){
// 	var player1Score = 0;
// 	var player2Score = 0;
// 	var expected = player2Score + 1;
// 	var actual = upScore("p2");

// 	if (expected == actual){
// 		console.log("upScore passed!")
// 	}
// 	else{
// 		console.log("upScore failed! Expected: " + expected + " instead got " + actual)
// 	}
// }