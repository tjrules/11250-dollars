class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.integer :teacher_id, index: true
      t.date :start_date
      t.date :end_date
      
      t.timestamps
    end
  end
end
