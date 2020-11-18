require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do  
    #  ERB HTML with enbed ruby
    # " smoke it"
    erb :home
end

get '/result' do
    @x = params[:x].to_f
    @y = params[:y].to_f
    
    @result = case params[:operator]
    when '+' then @x + @y
    when '-' then @x - @y
    when '*' then @x * @y
    when '/' then @X / @y
    end
    erb :result
end

get  '/faq' do
    erb :faq
end

# convention over configuration