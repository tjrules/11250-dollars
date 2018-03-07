class Student < ApplicationRecord
  belongs_to :course
  has_one :teacher, through: :course

  has_many :peers, through: :course, source: :students

  # def peers
  #   Student.where(course_id: course_id)
  # end
end
