require 'bcrypt'

class Api::AuthController < ApplicationController
  include BCrypt

  # AUTH
  def create
    user = User.new()
    dictionary = Dictionary.new()
    user.name = params[:name]
    user.surname = params[:surname]
    user.email = params[:email]
    user.password = BCrypt::Password.create(params[:password]).to_s
    if user.save
      dictionary.user = user
      dictionary.save
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # LOGIN
  def update
    # Update an existing user
    user = User.find_by(email: params[:email])
    if BCrypt::Password.new(user[:password]) == params[:password]
      render json: user
    else
      render json: { errors: "User not found!" }, status: :unprocessable_entity
    end
  end

end
