class Api::UserController < ApplicationController

  def index
    # Fetch all users
    users = User.all
    render json: users
  end

  def show
    # Fetch a single user by ID
    user = User.find(params[:id])
    render json: user
  end

  def create
    # Create a new user
    user = User.new(user_create)
    dictionary = Dictionary.new()
    if user.save
      dictionary.user = user
      dictionary.save
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    # Update an existing user
    user = User.find(params[:id])
    if user.update(user_update)
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    # Delete a user
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_create
    params.require(:user).permit(:name, :surname, :email, :password)
  end

  def user_update
    params.require(:user).permit(:name, :surname)
  end

  # def user_login
  #   params.require(:email)
  #   params.require(:password)
  # end

end
