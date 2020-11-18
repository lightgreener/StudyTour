# # Title: Guess The Number

# ### Activity:
# - You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.

 number = Random.rand 0..10 #  range 0 - 10 

while true
    print "please type in your number? "
    input = gets.to_i
    if input == number
        puts "your are right"
        break
    end
end



# ### Specification:
# - The user should be asked to guess a number
# - If the user's guess is correct, the user should see a congratulatory message
# - If the user's guess is not correct, the user should be asked to guess the number again.

# ### Extensions:
# - Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# - Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

number = Random.rand 100

while true
    print "please type in your number? "
    input = gets.to_i
    if input == number
        puts "your are right"
        break
    elsif input < number
        puts " wrong guess higher"
    elsif input > number
        puts " wrong, guess lower"
    end
end




