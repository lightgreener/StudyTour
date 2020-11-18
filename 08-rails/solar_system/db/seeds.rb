# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




# planets 

# id      name      image       orbit         diameter       mass     moon
# Integer text    string(url)   float         float        float  integer   


Planet.destroy_all

Planet.create :name => 'Earth', :orbit => 365.25, :moons => 1
Planet.create :name => 'Venus', :orbit => 283, :moons => 0
Planet.create :name => 'Mars', :orbit => 511.0, :moons => 10

