require_relative 'rubyrps.rb'
require 'sinatra'

$scoreOne = 0

get("/home"){
	@message = params["message"]
	$scoreOne
	# @scoreOne = 0
	#enter in validator 
	

	erb :home
}


post("/home"){
	@var = params
	@p1_weapon = params["weapon_one"]
	@p2_weapon = params["weapon_two"]
	$scoreOne += 1
	#compare and return winner
	erb :home
}











get("/turn"){
	return "Help"
	erb :home
}









