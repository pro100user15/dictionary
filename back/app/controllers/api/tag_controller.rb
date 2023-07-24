class Api::TagController < ApplicationController

  def index
    tags = Tag.where(dictionary: params[:dictionary])
    render json: tags
  end

  def create
    if Tag.find_by(name: tag_create[:name], dictionary: tag_create[:dictionary_id])
      render json: { errors: "tag with name is already exists" }, status: :unprocessable_entity
    else
      tag = Tag.new(tag_create)
      if tag.save
        render json: tag, status: :created
      else
        render json: { errors: tag.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def update
    if Tag.find_by(name: params[:new_name], dictionary: params[:dictionary_id])
      render json: { errors: "tag with name is already exists" }, status: :unprocessable_entity
    else
      if Tag.find_by(id: params[:tag_id], dictionary: params[:dictionary_id]) == nil
        render json: { errors: "tag with id is not exists" }, status: :unprocessable_entity
      else
        tag = Tag.find_by(id: params[:tag_id], dictionary: params[:dictionary_id])
        if tag.update(name: params[:new_name])
          render json: tag
        else
          render json: { errors: tag.errors.full_messages }, status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    tag = Tag.find(params[:id])
    tag.destroy
    head :no_content
  end

  private

  def tag_create
    params.require(:tag).permit(:name, :dictionary_id)
  end

  def tag_update
    params.permit(:tag_id, :new_name, :dictionary_id)
  end

end
