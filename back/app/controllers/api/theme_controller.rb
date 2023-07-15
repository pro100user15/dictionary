class Api::ThemeController < ApplicationController

  def index
    themes = Theme.where(dictionary: params[:dictionary])
    render json: themes
  end

  def create
    if Theme.find_by(name: theme_create[:name], dictionary: theme_create[:dictionary_id])
      render json: { errors: "theme with name is already exists" }, status: :unprocessable_entity
    else
      theme = Theme.new(theme_create)
      if theme.save
        render json: theme, status: :created
      else
        render json: { errors: theme.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def update
    if Theme.find_by(name: theme_update[:new_name], dictionary: theme_update[:dictionary_id])
      render json: { errors: "theme with name is already exists" }, status: :unprocessable_entity
    else
      theme = Theme.find_by(id: params[:id], dictionary: theme_update[:dictionary_id])
      if theme.update(name: theme_update[:new_name])
        render json: theme
      else
        render json: { errors: theme.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def destroy
    theme = Theme.find(params[:id])
    theme.destroy
    head :no_content
  end


  private

  def theme_create
    params.require(:theme).permit(:name, :dictionary_id)
  end

  def theme_update
    params.permit(:new_name, :dictionary_id)
  end

end
