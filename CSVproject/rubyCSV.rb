require 'CSV'
require 'pry'
require_relative 'CSVclasses.rb'

#EXECUTION OF CODE HERE

accountsHash = BuildHash.new
accountsHash.initHash
filter = Arguments.new
filter.initArguments
showme = DisplayReport.new

CSV.foreach("accounts.csv", {headers: true, return_headers: false}) do |row|
	accountsHash.build(row)
end

filter.getValidFilters(accountsHash.getKeys)
accountsHash.delete(filter.filterOutName)

showme.get(filter.filterOutFormat)
#revise printOut name
showme.printDisplay(accountsHash.printOut)
