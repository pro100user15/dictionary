class CreateThemes < ActiveRecord::Migration[7.0]
  def change
    create_table :themes do |t|
      t.string :name
      t.references :dictionary, null: false, foreign_key: true
      t.references :theme, null: true , foreign_key: true
      t.timestamps
    end
  end
end
