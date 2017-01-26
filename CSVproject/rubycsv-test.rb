require 'csv'
require 'pry'

#FUNCTION TO FIND ACCOUNT NAMES
def findNames(csvFile)
	x = []

	CSV.foreach(csvFile, {headers: true, return_headers: false}) do |row|
		x.push(row["Account"].strip)
	end
	return x.uniq
end

#FUNCTION TO PULL ALL CATEGORIES FROM FILE
def findCats(csvFile)
	x = []

	CSV.foreach(csvFile, {headers: true, return_headers: false}) do |row|
    	x.push(row["Category"].strip)
    end
 return x.uniq
end

#FUNCTION THAT FINDS ALL IN/OUTFLOW OF GIVEN PARAMETERS
def toatlAndAverageCalc(category, person)

	totIn = []
	totOut = []

	CSV.foreach("accounts.csv", {headers: true, return_headers: false}) do |row|
		if row["Category"].include? category
			if row["Account"].include? person
				totIn.push(row["Inflow"].gsub(/[,\$]/, "").to_f) if row["Inflow"].gsub(/[,\$]/, "").to_f != 0.0
				totOut.push(row["Outflow"].gsub(/[,\$]/, "").to_f) if row["Outflow"].gsub(/[,\$]/, "").to_f != 0.0
			end
		end
	end

	numOfTransactions = totIn.length + totOut.length
	total = 0.0
	average = 0.0

	totIn.each { |i| total += i }
	totOut.each{ |i| total -= i }

	if numOfTransactions == 0
		average = "No occurance"
	else
		average = (total/numOfTransactions).round(2) 
	end

	return person, category, total.round(2), average
end

#BEGINING OF CODE EXECUTION
names = findNames('accounts.csv')
categories = findCats('accounts.csv')

priyaarr = []
soniaarr = []

names.each do |n|
	categories.each do |c|
		priyaarr.push(toatlAndAverageCalc(c,n)) if n == "Priya"
		soniaarr.push(toatlAndAverageCalc(c,n)) if n == "Sonia" 
	end
end

# soniaarr.each do |i|
# 	print i.join(" ") + "\n" unless i.include?("No occurance")
# end
# puts "\n"
# priyaarr.each do |i|
# 	print i.join(" ") + "\n" unless i.include?("No occurance")
# end

# puts "\n"

data = [soniaarr, priyaarr]



names.each do |n|
	puts "================================================================================"
	puts "#{n}..."
	puts "================================================================================"
	puts "Category                    | Total spent | Average per transaction"
	puts "----------------------------|-------------|-------------------------------------"
	if n.to_s.include? "Sonia"
		soniaarr.each do |sr|
			print "#{sr[1].ljust(29)}" + "#{sr[2].to_s.ljust(14)}" + "#{sr[3].to_s.ljust(37)}" + "\n" unless sr.include? "No occurance"
		end
	end
	if n.to_s.include? "Priya"
		priyaarr.each do |pr|
			print "#{pr[1].ljust(29)}" + "#{pr[2].to_s.ljust(14)}" + "#{pr[3].to_s.ljust(37)}" + "\n" unless pr.include? "No occurance"
		end
	end
	puts "\n\n"

end












