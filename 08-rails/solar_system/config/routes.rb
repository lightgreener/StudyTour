Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/planets' => 'planets#index'
  
  get '/planets/new'=> 'planets#new', :as =>'new_planet'
  post '/planets' => 'planet#create'

  get '/planets/:id' => 'planets#show',:as => 'planet'

delete '/planets/:id' => 'planets#destroy'
end
