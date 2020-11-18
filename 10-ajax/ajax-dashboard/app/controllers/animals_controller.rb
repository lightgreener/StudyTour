class AnimalsController < ApplicationController
    def index
        animals = Animal.all
        # render :index      rails will do this  for you
        render :json => animals
    end

end
