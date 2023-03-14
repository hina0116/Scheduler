class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|

      t.integer :user_id
      t.integer :day_id
      t.string :name
      t.text :content
      t.boolean :making_status, null: false, default: true

      t.timestamps
    end
  end
end
