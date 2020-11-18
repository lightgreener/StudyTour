require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
    erb :home
end


#index 
get '/butterflies' do
    db = SQLite3::Database.new 'database.sqlite3'
    # db.execute
    db.results_as_hash = true 
    @butterflies = db.execute "SELECT * FROM butterflies"
    erb :butterflies_index
    # @butterflies.to_s #  smoke it 
end

# show page
get '/butterflies/:id' do 
    # connect to db
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true 
    # get this butterfly with params[:id]
    @butterfly = db.execute "SELECT * FROM butterflies WHERE id="#{ params[:id]}"
    @butterfly = @butterfly.first
    erb :butterfly_show

end

# 创建
def query_db (sql_statement)

end