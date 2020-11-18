require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do 
    erb :home
end

get '/lookup' do
    # get the stock symbol
    @stock_symbol = params[:stock_symbol].upcase
    # fetch the stock info
    begin
        @info = StockQuote::Stock.quote @stock_symbol
    rescue
        redirect to ('/')
    end    
    # render the result
    # 这里需要把下面的值变成string 输出,但是输出在一个空白页面，还是让他出现在 erb中比较好
    # @info.close 
    # @info.close.to_s # 这个是默认输出的。
    erb :result
    # 会产生一个问题， 就是如果没有input ，但是用户提交申请，就会报错，
    #  解决方式一
    # redirect to ('/') if params[:stock_symbol].empty?  这里有括号（‘/’） 
    # 方式二 ， 在 home page， 的input 里 家 required 关键字
    # 有会产生一个新问题， 如果input 是 invalid 的单词， 还会报错
    #  抛出异常    begin rescue end  line:16 -- 20  他的意思是 如果有报错，这里是解决方案，
    #  返回主页， 注意： redirect to ('/') 写法不能变。


end


