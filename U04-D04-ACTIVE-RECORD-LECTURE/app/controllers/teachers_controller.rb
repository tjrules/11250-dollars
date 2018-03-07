class TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    # render :index
  end

  def show
    id = params[:id]
    @teacher = Teacher.find(id)
    @courses = @teacher.courses
  end
end
