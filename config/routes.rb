Rails.application.routes.draw do

  root to: "homes#top"

  resources :users, only: [:show, :edit, :update]
  resources :events, only: [:index] do
    #resources :diaries, only: [:create]
  end
  resources :tasks, only: [:new, :create, :index, :show, :edit, :update, :destroy]

  devise_for :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
