class CreateDiaries < ActiveRecord::Migration[6.1]
  def change
    create_table :diaries do |t|

      t.integer :user_id
      t.integer :deys_id
      t.text :content

      t.timestamps
    end
  end
end
