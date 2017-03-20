require_relative 'CSVclasses.rb'
require 'CSV'
require 'sinatra'
require 'pry'


get("/"){
	redirect("/fullreport")
}


get("/fullreport"){
	@name = params["whoWeWant"]
	@passHash = buildItAndTheyWillCome.deleteAllBut(@name)
	erb :banana
}

post("/fullreport"){
	newStuff = params.values
	cleanNewStuff = stripNewRow(newStuff)
	addRow(cleanNewStuff)
	
	redirect("/fullreport")
}

get("/login"){
	if $loggedIn == true
		redirect("/fullreport")
	end
	erb :login
}

post("/login"){
	uname = params["userID"]
	password = params["password"]
	if uname == "bossman" && password == "fish"
		$loggedIn = true
		redirect("/fullreport")
	end
	redirect("/login")
}

get("/logout"){
	$loggedIn = false
	redirect("/fullreport")
}




