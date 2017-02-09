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
		return "Tis' a tie! Sire!"
	end
end

def whoWins(weapon1, weapon2)
	if (weapon1 == "rock" && weapon2 == "scissors" ||
		weapon1 == "paper" && weapon2 == "rock" ||
		weapon1 == "scissors" && weapon2 == "paper")
		$scoreOne += 1
		return "Knight_1 wins"
	else
		$scoreTwo += 1
		return "Knight_2 wins"
	end
end

def keepPlaying
	if $scoreOne == 3
		return 10
	elsif $scoreTwo == 3
		return 20
	end
end






