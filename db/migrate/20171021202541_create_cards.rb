class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :suit, null: false
      t.string :rank, null: false
      t.boolean :played, null: false, default: false

      t.timestamps
    end
  end
end
