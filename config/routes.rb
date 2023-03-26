Rails.application.routes.draw do

  devise_for :users
  root to: "events#index"

  resources :events do
    resources :diaries, only: [:create]
  end
  resources :users, only: [:show, :edit, :update]
  resources :tasks, only: [:new, :create, :index, :show, :edit, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
