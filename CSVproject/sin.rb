require_relative 'CSVclasses.rb'
require 'CSV'
require 'sinatra'
require 'pry'


#THIS IS A CONTROLLER
get("/"){
	erb :home
}


#THIS IS A CONTROLLER
get("/fullreport"){
	@name = params["whoWeWant"]
	@passHash = buildItAndTheyWillCome.delete(@name)
	erb :banana
}

get("/login"){
	erb :login
}

post("/login"){
	uname = params["userID"]
	password = params["password"]
	$loggedIn = false
	if uname == "bossman" && password == "fish"
		$loggedIn = true
		redirect "/admin"
	end
}

get("/logout"){
	erb :logout
}
post("/logout"){
	$loggedIn = false
}

get("/admin"){
	@passHash = buildItAndTheyWillCome.delete(@name)
	erb :admin
}

post("/admin"){
	newStuff = params.values
	cleanNewStuff = stripNewRow(newStuff)
	addRow(cleanNewStuff)
	
	redirect("/admin")
}

