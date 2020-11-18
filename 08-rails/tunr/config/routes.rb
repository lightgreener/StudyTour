Rails.application.routes.draw do

  # get 'session/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to =>'pages#home'
  resources :users,:only => [:new, :create]


  get '/login' => 'session#new'
  post '/login'=> 'session#create'
  delete '/login'=> 'session#destroy'

  resources :mixtapes, :only => [:new, :create]


end
