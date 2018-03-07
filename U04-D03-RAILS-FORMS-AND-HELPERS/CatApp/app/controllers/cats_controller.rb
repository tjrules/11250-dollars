class CatsController < ApplicationController
  def index
    @cats = Cat.all
  end

  def show
    @cat = Cat.find(params[:id])
  end

  def new
    @cat = Cat.new
  end

  def update
    @cat = Cat.find(params[:id])
      if @cat.update_attributes(cat_params)
        redirect_to cats_path
      else
        render :edit
      end
  end

  def edit
    @cat = Cat.find(params[:id])
  end

  def create
    @cat = Cat.new(cat_params)
      if @cat.save
        redirect_to cat_path(@cat)
      end
  end

  def destroy
    @cat = Cat.find(params[:id])
    @cat.destroy
    redirect_to cats_path
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :breed) 
  end

end
