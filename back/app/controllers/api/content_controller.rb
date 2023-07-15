class Api::ContentController < ApplicationController

  def index
    content = Content.where(dictionary: params[:dictionary])
    render json: content
  end

  def create
    if Content.find_by(content: content_create[:content], dictionary: content_create[:dictionary_id])
      render json: { errors: "content with name is already exists" }, status: :unprocessable_entity
    else
      content = Content.new(content_create)
      if content.save
        render json: content, status: :created
      else
        render json: { errors: content.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def update
    content = Content.find_by(id: params[:id], dictionary: content_create[:dictionary_id])
    if content == nil
      render json: { errors: "not found this content" }, status: :unprocessable_entity
    else
      if content.update(content: content_create[:content], translate: content_create[:translate], theme: Theme.find_by(id: content_create[:theme_id]))
        render json: content
      else
        render json: { errors: content.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def destroy
    content = Content.find(params[:id])
    content.destroy
    head :no_content
  end

  private

  def content_create
    params.permit(:content, :translate, :dictionary_id, :theme_id)
  end

  # def content_update
  #   params.permit(:new_name, :dictionary_id)
  # end

end
