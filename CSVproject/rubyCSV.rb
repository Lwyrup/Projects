require 'csv'
require 'pry'
accounts = CSV.read('accounts.csv')

#ADDS ITEMS FOR SONIA INTO SEPERATE ARRAY

soniaf = []
i = 0

CSV.foreach("accounts.csv", {headers: true, return_headers: false}) do |row|
	if accounts [i][0].include? "Sonia"
		soniaf.push(accounts[i])
	end
	i += 1
end

#ADDS ITEMS FOR PRYIA INTO SEPERATE ARRAY

priyaf = []
i = 0

CSV.foreach("accounts.csv", {headers: true, return_headers: false}) do |row|
	if accounts[i][0].include? "Priya"
		priyaf.push(accounts[i])
	end
	i += 1
end


puts "Sonia's file contains: " + soniaf.to_s + soniaf.length.to_s + " Items" + "\n\n"
puts "Priya's file contains: " + priyaf.to_s + priyaf.length.to_s + " Items" + "\n\n"

puts "done"
i = 0
soniaf.each do 
	puts "hi #{i+1}"
	i+=1
end











