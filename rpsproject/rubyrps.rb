#--FUNCTIONS HERE--
def ask
	players = ["one", "two"]
	response = question(players)
	p1_weapon = response[0]
	p2_weapon = response[1]
	validator(p1_weapon, p2_weapon)
end

def question(players)
	response = []
	players.each do |player|
		puts"Player #{player} choose your weapon:"
		response.push(gets.chomp)
	end
	return response
end

def validator(p1_weapon, p2_weapon)
	if areValid(p1_weapon) and areValid(p2_weapon)
		puts "===============\n valid choices \n---------------"
		decider(p1_weapon, p2_weapon)
	else
		puts "===============\nINVALID WEAPONS\n---------------\n\n\n"
		ask
	end
end

def areValid(weapon)
	if (weapon == "rock" || weapon == "paper" || weapon == "scissors")
		return true
	else
		return false
	end
end

def decider(weapon1, weapon2)
	if weapon1 != weapon2
		whoWins(weapon1, weapon2)
	else 
		puts "draw"
		showScore
		ask
	end
end


# def draw
#

def whoWins(weapon1, weapon2)
	if (weapon1 == "rock" && weapon2 == "scissors" ||
		weapon1 == "paper" && weapon2 == "rock" ||
		weapon1 == "scissors" && weapon2 == "paper")
		scoreAndContinue("p1")
	else
		scoreAndContinue("p2")
	end
end

def scoreAndContinue(player)
	upScore(player)
	showScore
	keepPlaying
end

def upScore(player)
	if (player == "p1")
		$player1Score += 1;
	elsif (player == "p2")
		$player2Score += 1;
	end
end

def showScore
	puts "\n---SCORES---"
	puts "Player 1: #{$player1Score}"
	puts "Player 2: #{$player2Score}"
	puts "------------\n\n\n"
end

def keepPlaying
	if ($player1Score == 3 || $player2Score == 3)
		finalVictor($player1Score, $player2Score)
	else
		ask()
	end
end

def finalVictor(s1, s2) #switch to if
	case (s1 > s2)
	when true
		winMessage("Player one", s1)
	when false
		winMessage("Player two", s2)
	end
end

def winMessage(player, score)
	puts(
		"><><><><><><><><><><><><><><><\n"+
		"#{player} wins with #{score} points!\n" +
		"|_-_-_-_-_-GAMEOVER-_-_-_-_-_|\n\n\n\n")
end

#--CODE EXECUTION HERE--
$player1Score = 0
$player2Score = 0

ask

