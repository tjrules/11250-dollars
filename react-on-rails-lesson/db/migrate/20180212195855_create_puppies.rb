class CreatePuppies < ActiveRecord::Migration[5.1]
  def change
    create_table :puppies do |t|

      t.timestamps
      t.string :name
      t.string :breed
      t.integer :age
    end
  end
end
