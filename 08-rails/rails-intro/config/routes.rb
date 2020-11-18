Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # 
  root :to => 'pages#home'
  get '/hello' => 'pages#hello' 
  get '/goodbye' => 'pages#goodbye'

  get '/auto'  => 'auto#color'
  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'

  get '/funny' => 'funny#lol'
end
