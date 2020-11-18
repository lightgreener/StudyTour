def factorial_recursive (n)
    if n <=1
        puts "base case reached"
        1
    else
        puts " recuring is #{ n }"
        n * factorial_recursive (n-1)
    end
end

requier 'pry'
binding.pry
