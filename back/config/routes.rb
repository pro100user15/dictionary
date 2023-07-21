Rails.application.routes.draw do
  namespace :api do
    resources :auth
    resources :user
    resources :theme_admin
    resources :theme
    resources :content
  end
end
