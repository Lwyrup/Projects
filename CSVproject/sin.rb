require_relative 'CSVclasses.rb'
require 'CSV'
require 'sinatra'
require 'pry'

def buildItAndTheyWillCome
	accountsHash = BuildHash.new
	accountsHash.initHash

	CSV.foreach("accounts.csv", {headers: true, return_headers: false}) do |row|
		accountsHash.build(row)
	end
	return accountsHash
end


get("/fullreport"){
	@passHash = buildItAndTheyWillCome.printOut
	erb :banana
}

get("/Sonia"){
	@passHash = buildItAndTheyWillCome.delete("Sonia")
	erb :banana
}

get("/Priya"){
	buildItAndTheyWillCome
	@passHash = buildItAndTheyWillCome.delete("Priya")
	erb :banana
}




	