require 'CSV'
require 'pry'

accounts = {}

CSV.foreach("accounts.csv", {headers: true, return_headers: false}) do |row|
    account = row["Account"].chomp

# CREATES AND TRACKS NEW ACCOUNTS

    if !accounts[account]
    	accounts[account] = { :total => 0.0, :category => {}}
    end

    current_account = accounts[account]

    current_category = row["Category"].chomp

# CREATES ENTRIES FOR TYPES OF TRANSACTIONS

    if !accounts[account][:category][current_category]
    	accounts[account][:category][current_category] = { :tally => 0.0, :num_of_transactions => 0, :avg_transaction => 0.0 }
    end

# CALCULATES TRANSACTION AMOUNTS

inflow = row["Inflow"].gsub(/[,\$]/, '').to_f.round(2)
outflow = row["Outflow"].gsub(/[,\$]/, '').to_f.round(2)
amount = inflow - outflow

current_account[:category][current_category][:tally] += amount
current_account[:category][current_category][:num_of_transactions] += 1
current_account[:category][current_category][:avg_transaction] = current_account[:category][current_category][:tally] / current_account[:category][current_category][:num_of_transactions]

current_account[:total] += amount

end





# CREATES DISPLAY
binding.pry


if ARGV[0].to_s != ''
	accounts.delete_if { |key, value| key != ARGV[0].to_s }
end



accounts.each do |name, balance|
	puts "==============================================================="
	puts "#{name}: 		Balance: $#{balance[:total].round(2)}"
	puts "==============================================================="
	puts "| Category 		| Amount 	| Average Transaction |"
	puts "| --------------------- | ------------- | ------------------- |"
	balance[:category].each do |category, t|
    	print "| #{category.ljust(21)} | \$#{t[:tally].round(2).to_s.ljust(12)} | \$#{t[:avg_transaction].round(2).to_s.ljust(18)} |\n"
	end

end


puts "Done"
puts "<h1></h1>"
puts "	<p></p>"