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


get("/"){
	erb :home
}




post("/fullreport"){
	#Add to csv sheet????
	redirect("/fullreport")
}






get("/fullreport"){
	@name = params["whoWeWant"]

	@passHash = buildItAndTheyWillCome.delete(@name)

	
	erb :banana
}

# post("/fullreport"){
# 	@name = params["whoWeWant"]
# 	@passHash = buildItAndTheyWillCome.printOut.delete(@name)
# 	erb :banana
# }

# get("/Sonia"){
# 	@passHash = buildItAndTheyWillCome.delete("Sonia")
	
# 	erb :banana
# }

get("/Priya"){
	buildItAndTheyWillCome
	@passHash = buildItAndTheyWillCome.delete("Priya")
	erb :banana
}




	