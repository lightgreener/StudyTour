class PagesController < ApplicationController
    # method inside a controller is called an action
    def hello
        #render :plain => 'hello world'
        render :hello  # sinatra : erb : hello
    end

    def goodbye
        render :goodbye
    end

    def home
        render :home
    end


end
    