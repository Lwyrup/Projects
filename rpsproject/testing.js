var prompt = require('prompt'); //init. prompt

//FUNCTIONS
function areValid(string){ //Tests validity of given weapons via prompt
  if (string == "rock" || string == "paper" || string == "scissors")
    return true
  else
    return false
}

function formatAnswer(string){ //Removes spaces from prompt inputs
  string = string.replace(/ /g, "").toLowerCase()
  return string
}

function game(){ //Begins the game 
	console.log("PLAYER 1 ENTER YOUR WEAPON");
	getWeaponOne();
}

function getWeaponOne(){ //Gets the first input for weapon
	prompt.get(['P1weapon'], function(err, result){
		var p1ToArms = formatAnswer(result.P1weapon)
		if (areValid(p1ToArms)){
			console.log("PLAYER ONE YOU CHOSE: " + p1ToArms + ".\n\n");
			getWeaponTwo(p1ToArms);
		}
		else{
			console.log("go away");
			game();
		}
	});
}

function getWeaponTwo(p1ToArms){ //Gets the second input for weapon
	console.log("PLAYER TWO ENTER YOUR WEAPON")
	prompt.get(['P2weapon'], function(err, result){
		var p2ToArms = formatAnswer(result.P2weapon)
		if (areValid(p2ToArms)){
			console.log("PLAYER TWO YOU CHOSE: " + p2ToArms + ".\n\n")
			decider(p1ToArms, p2ToArms)
		}
		else{
			console.log("go away");
			getWeaponTwo();
		}
	});
}

function decider(p1_weapon, p2_weapon){ //compares weapon and decides who wins
	if (p1_weapon == "rock" && p2_weapon == "scissors" || 
		p1_weapon == "scissors" && p2_weapon == "paper" || 
		p1_weapon == "paper" && p2_weapon =="rock"){
		console.log("player1 wins the round: " + p1_weapon + " beats " + p2_weapon);
		upScore("p1");
		checkScore();
		return "p1 wins"
	}
	else 
	 	console.log("player2 wins the round: " + p2_weapon + " beats " + p1_weapon);
		upScore("p2");
		checkScore();
		return "p2 wins"
}  

function upScore(player){ //increases the score of the player who won the round
	if (player == "p1"){
		p1score += 1;
		return p1score
	}
	if (player == "p2"){
		p2score += 1;
		return p2score
	}
}

function checkScore(){ //Checks if anyone has won yet
	if (p1score < 3 && p2score == 3){
		console.log("player two wins with " + p2score + " points.");
	}
	if (p2score < 3 && p1score == 3){
		console.log("player one wins with " + p1score + " points.");
	}
	if (p1score < 3 && p2score < 3){
		console.log("\nPoints are: player1 => " + p1score);
		console.log("Points are: player2 => " + p2score + "\n\n\n\n");
		game();
	}
}

var p1score = 0;
var p2score = 0;

prompt.start();
game();


//TESTING//

//areValid test

// testAreValid();
// testFormatAnswer();
// testDecider();

// function testAreValid(){
// 	var actual = areValid("shovel");
// 	var expected = false;
// 	if (expected == actual){
// 		console.log("areValid has passed!");
// 	}
// 	else{
// 		console.log("areValid has failed, expected: " + expected + " instead got " + actual);
// 	}
// }

// function testFormatAnswer(){
// 	var actual = formatAnswer("g    A         Me")
// 	var expected = "game"
// 	if (expected == actual){
// 		console.log("formatAnswer has passed!");
// 	}
// 	else{
// 		console.log("formatAnswer has failed, expected: " + expected + " instead got " + actual);
// 	}
// }

// function testDecider() {
// 	var actual = decider("rock", "paper")
// 	var expected = "p2 wins"
// 	if (expected == actual){
// 		console.log("decider has passed!");
// 	}
// 	else{
// 		console.log("decider has failed, expected: " + expected + " instead got " + actual);
// 	}
// }
