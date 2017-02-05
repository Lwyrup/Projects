require_relative 'webrps.rb'
require 'sinatra'

$scoreOne = 0

get("/home"){
	@message = params["message"]
	$scoreOne
	erb :home
}


post("/home"){
	@var = params
	@p1_weapon = params["weapon_one"]
	@p2_weapon = params["weapon_two"]

	validator(@p1_weapon, @p2_weapon)
	$scoreOne += 1
	#compare and return winner


	erb :home
}



















