require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do 
    " home page"
    "here is your lucky number #{ rand 1..25}"
    " here is your uptime  is #{ `uptime` }"

end

get '/hello' do
    " Hello from sinatra"
end 

get '/goodbye' do
    " goodbye my friend"
end

get '/:name' do 
    " #{ params[:name].upcase } is a proud member of Dooley club"
end

get '/club/:first/:last' do
    "#{ params[:first].upcase } #{ params[:last].capitalize} is a premium member "
end

get '/calc/:x/:y' do
    result = params[:x].to_i * params[:y].to_i
    # "the result is #{ params[:result]}"   错的， 这里需要的是ruby code
    "the result is #{ result }"
end 
