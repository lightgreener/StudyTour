require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

#  establish the connection
# 
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',     # comma 
    :database => 'database.sqlite3'
) 

# 
ActiveRecord::Base.logger = Logger.new(STDERR)

# model  is class with SQL behind it
# 这个类是单数， rails 能找到复数的 SQL 文件tests

class Test < ActiveRecord::Base # two 
end 

# get =>   read
# post => create

get '/' do
    erb :home
end

# Index 
get '/flies' do
    # db = SQLite3::Database.new 'database.sqlite3';  # :: 之间不能有空格
    # #       SQLite3 必须这么写  下面一定跟着db 变hash的命令
    # db.results_as_hash = true
    # @flies = db.execute 'SELECT * FROM flies'
    # # @flies.to_s  #smoke check
    # erb :flies_index
    # 上面被 函数来简写
    @flies = Test.all
    erb :flies_index
end

# new  这个要放到前面  看week5day05  02:37:00 的视频
get '/flies/new' do
    # puts "new fly .............."
    erb :flies_new  
end

# create
post '/flies' do
    query = "INSERT INTO flies (name,family,image) VALUES ('#{params[:name]}','#{ params[:family]}','#{params[:image]}')"
    # execute the sql
    query_db query
    #  show them the new page 注意；get 都是erb 到新page， 
    #  但是 这个是post。 它用的redirect_to 到主页
    # redirect_to '/flies' #  又变成 get 函数 
    redirect to ('/flies') #  redirect to 一定要这么写
end

#show pages
get '/flies/:id' do
#     # connect to db
#    db = SQLite3::Database.new "database.sqlite3"
#    db.results_as_hash = true 
#     #  get this butterfly with params[:id]
#     @fly = db.execute "SELECT * FROM flies WHERE id=#{ params[:id] } "
#     # @fly.to_s   可以看到这是 哈希的数组
#     # 我们要的但是哈希
#     @fly = @fly.first  # 为什么是first，因为只有一个
#     erb :flies_show   # 这里是 erb， 不是reader 
  
# 上面的code 要被 函数来 简写  
    @fly = query_db "SELECT * FROM flies WHERE id=#{ params[:id] } "
    @fly = @fly.first  # 为什么是first，因为只有一个
    erb :flies_show   # 这里是 erb， 不是reader 
end

# edit  
get '/flies/:id/edit' do
    #  copy from show page
    @fly = query_db "SELECT * FROM flies WHERE id=#{ params[:id] } "
    @fly = @fly.first  
    erb :flies_edit #  edit here    
end
#   update 紧跟  edit
post '/flies/:id' do
    #  注意 这里是双引号，里有单引号 。 而且单引号 一定好写完整
    query = "UPDATE flies SET name='#{params[:name]}', family='#{ params[:family]}',image='#{params[:iamge]}' WHERE id='#{ params[:id]}'"
    query_db query 
    redirect to ("/flies/#{ params[:id]}") # get to the show page   
end

#  delete / destroy
get '/flies/:id/delete' do
    # delete the flies
    query_db "DELETE FROM flies WHERE id=#{ params["id"]}"
    redirect to ('/flies')
end


def query_db( sql_statement )
    puts sql_statement  # nice for debugging 他只显示在terminal里
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # 这个results 是这个函数的返回值，可以是任何东西，所以，没有hat，
end

