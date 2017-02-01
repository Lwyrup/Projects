prompt = require('prompt')

function formatAnswer(string){
  string = string.replace(/ /g, "").toLowerCase()
  return string
}

function areValid(string){
  if (string == "rock" || string == "paper" || string == "scissors")
    return true
  else
    return false
}

function decider(p1_weapon, p2_weapon){
  if (p1_weapon != p2_weapon){ //does player one win?
    if (p1_weapon == "rock" && p2_weapon == "scissors") //rock beats scissors
      console.log("player1 wins rock beats scissors"); //increase score1
    else if(p1_weapon == "scissors" && p2_weapon == "paper") //scissors beat paper
      console.log("player1 wins scissors beats paper"); //increase score1 
    else if(p1_weapon == "paper" && p2_weapon == "rock") //paper beat rock
      console.log("player1 wins paper beats rock") //increase score1
    else 
      console.log("player2 wins " + p2_weapon + " beats " + p1_weapon) //increase score2
  }
  else{ //else player two wins
      console.log("Draw")
  }  

}

function getPlayer1(){

  prompt.get(['P1Weapon'], function (err, result) {
    
    var lowerP1Weapon = result.P1Weapon.toLowerCase();
    var isAnswerValid = areValid(lowerP1Weapon);
    if (isAnswerValid == true){
      console.log('Player 1, you chose ' + result.P1Weapon + '.');
      getPlayer2(lowerP1Weapon);
    }
    else {
      console.log("wrong");
      
    }
  });
}

function ask(){
  var prompt = require('prompt');
  prompt.get(['player1', 'player2'], function (err, result) {
    console.log('Weapons chosen!');
    console.log('Player 1 Choice: ' + result.player1);
    console.log('Player 2 Choice: ' + result.player2);

    p1_weapon = formatAnswer(result.player1)
    p2_weapon = formatAnswer(result.player2)

    if(areValid(p1_weapon) && areValid(p2_weapon)){ //if weapons are valid decide who wins
      console.log("valid choices");      
      decider(p1_weapon, p2_weapon)
    }
    else{ //if weapons are invalid skip scoring segment
      console.log("invalid weapons");
    }
});
}



getPlayer1()



//loop until score 3
  //ask
  //areValid(both weaps)
  //decider(both)
  //score increase p1 or p2
  //state score
//repeat
