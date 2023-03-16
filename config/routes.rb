Rails.application.routes.draw do

  devise_for :users
  root to: "homes#top"

  resources :users, only: [:show, :edit, :update]
  resources :tasks, only: [:new, :create, :index, :show, :edit, :update, :destroy]
  resources :days, only: [:new, :create, :index, :show, :edit, :update, :destroy] do
    resources :diaries, only: [:create]
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
