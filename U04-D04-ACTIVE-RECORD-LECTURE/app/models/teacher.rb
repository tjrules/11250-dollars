class Teacher < ApplicationRecord
  has_many :courses
  has_many :students, through: :courses

  def say_hi
    "hi i am #{name} and i have #{students.count} students"
  end

  def grades
    students.pluck(:grade)
  end

end
