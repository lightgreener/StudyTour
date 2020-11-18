# # Simon says 2.0

# Implement a game of Simon Says 2.0.

# - Game first prints a random number between 1-4.
# - The person has to repeat it.
# - The game repeats the same number and adds another one after it
# - Person then repeats the sequence.
# - This goes on until a player cant repeat the sequence.
# - Game then prints a message, saying how much player scored.

# Implement that game however you want, here is how my plays.

# ![Simon Says](https://raw.githubusercontent.com/aleksanderbrymora/seir01-homework/master/warmups/5week/3day/simon.gif)

require 'pry'

numbers = (1..4).to_a

cpu_number_array = []
man_number_array = []

cpu_number = numbers.sample
cpu_number_array.push(cpu_number)
puts cpu_number
man_number = gets.to_i
man_number_array.push(man_number)
puts man_number
puts cpu_number_array.with_ + ' '+ man_number.to_s





# index = 0
# def simon (a,b,count=0)
#     puts a 
#     if a == b
#         count += 1
#     else
#         puts count
#     end
# end

simon(cpu_number, man_number)
binding.pry
