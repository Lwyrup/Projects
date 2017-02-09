inputone = "rock"
inputtwo = "paper"

def areValid(weapon)
	if (weapon == "rock" || weapon == "paper" || weapon == "scissors")
		return true
	else
		return false
	end
end

def validator(p1_weapon, p2_weapon)
	if areValid(p1_weapon) and areValid(p2_weapon)
		decider(p1_weapon, p2_weapon)
	else
		return "Sire! Thy choice is illegal!"
	end
end

def decider(weapon1, weapon2)
	if weapon1 != weapon2
		whoWins(weapon1, weapon2)
	else 
		return @message = "Tis' a tie! Sire!"
	end
end

def whoWins(weapon1, weapon2)
	if (weapon1 == "rock" && weapon2 == "scissors" ||
		weapon1 == "paper" && weapon2 == "rock" ||
		weapon1 == "scissors" && weapon2 == "paper")
		return @message = "Knight_1 wins", $scoreOne += 1
	else
		return @message = "Knight_2 wins", $scoreTwo += 1
	end
end


def keepPlaying
	if $scoreOne == 3
		redirect("/game?win=Knight_1")
	elsif $scoreTwo == 3
		redirect("/game?win=Knight_2")
	end
end






