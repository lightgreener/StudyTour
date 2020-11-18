Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #  第一行 不用写get
   root :to => 'pages#home'  # root_path
  get '/numbers' => 'pages#numbers'
  get '/text' => 'pages#text'
  get '/assets' => 'pages#assets'
  get '/url' => 'pages#url'
  



end
