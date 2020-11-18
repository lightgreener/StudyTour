# def countdown_iterative (n=10)
#     while n>= 0
#         puts n
#         n -= 1
#         sleep 1
#     end
#     puts "blast off"
# end
    def countdown_recursive (n = 10)
        if n < 0
            puts "blast off"
        else
            puts n
            sleep 1
            countdown_recursive n-1
        end
    end


    require 'pry'
    binding.pry
