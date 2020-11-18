require 'pry'
require 'sinatra'
require 'sinatra/reloader'

# get '/' do 
#     "home page".upcase
# end

get '/' do 
    erb :home
end

get '/result' do
    # binding.pry
    @x = params[:x].to_f
    @y = params[:y].to_f

    # case params[:operator]  dry code 我repeat result  下面是简写
    # when '+' then result = x + y
    # when '-' then result = x - y
    # when '*' then result = x * y
    # when '/' then result = x / y
    # end

    @result = case params[:operator]
    when '+' then @x + @y
    when '-' then @x - @y
    when '*' then @x * @y
    when '/' then @x / @y
    end
    # "the result is #{ result} " 我们用erb 
    erb :result
end

get '/faq' do
    erb :faq
end