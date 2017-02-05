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
		return @message = "Invalid choice\ntry again."
	end
end

def decider(weapon1, weapon2)
	if weapon1 != weapon2
		whoWins(weapon1, weapon2)
	else 
		return @message = "Valid but same."
	end
end

def whoWins(weapon1, weapon2)
	if (weapon1 == "rock" && weapon2 == "scissors" ||
		weapon1 == "paper" && weapon2 == "rock" ||
		weapon1 == "scissors" && weapon2 == "paper")
		return @message = "player 1 wins", $scoreOne += 50
	else
		return @message = "player 2 wins"
	end
end