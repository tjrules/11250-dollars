Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :teachers, only: [:index, :show]
  resources :courses, only: [:index, :show]
end
