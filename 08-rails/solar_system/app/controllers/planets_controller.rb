class PlanetsController < ApplicationController
    def index
        @planets = Planet.all
    end


    def show
    # raise : eye sigh
    @planet = Planet.find params[:id]
    end

    def new
    end

    def create
        # planet =Planet.new
        planet =Planet.create :name => params[:name], :image =>params[:image], :orbit => params[:orbit], :mass => params[:mass],:moons => params[:moons]

        redirect_to planet_path(planet.id) 
    end

    def edit
        @planet = Planet.find params[:id]
    end

    def destroy
        @planet = Planet.find params[:id]
        planet.destroy
        redirect_to planets_path
    
    end


end