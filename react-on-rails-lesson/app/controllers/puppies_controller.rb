class PuppiesController < ApplicationController

  def index
    render json: Puppy.all
  end

  def show(id)
    render json: Puppy.find(id)
  end
end
