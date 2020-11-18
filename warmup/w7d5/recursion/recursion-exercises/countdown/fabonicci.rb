def fabonicci n
   a =1
   b =1
   while n > 2  # base case
       a, b = b, a+b
       n -= 1
   end
end

def fib_recursive n
    if n == 1 || n == 2
        1
    else
        fib_recursive (n-2 ) + fib_recursive( n-1)


    # while n >2
    #     sum = (fib_recursive n-2 ) + (fib_recursive n-1)
    end
end


require 'pry'
binding.pry
