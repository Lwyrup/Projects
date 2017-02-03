require_relative 'CSVclasses.rb'
require 'CSV'
require 'sinatra'
require 'pry'



get("/"){
	erb :home
}




post("/fullreport"){
	@newstuff = params.values.join(",")
	addRow(@newstuff)
	redirect("/fullreport")
}






get("/fullreport"){
	@name = params["whoWeWant"]

	@passHash = buildItAndTheyWillCome.delete(@name)

	
	erb :banana
}




get("/login")













	