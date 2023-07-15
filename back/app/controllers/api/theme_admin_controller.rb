class Api::ThemeAdminController < ApplicationController

  def index
    themes = Theme.all
    render json: themes
  end

  def destroy
    theme = Theme.find(params[:id])
    theme.destroy
    head :no_content
  end

end
