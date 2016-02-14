class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :username
      t.string :description

      t.timestamps null: false
    end
  end
end
