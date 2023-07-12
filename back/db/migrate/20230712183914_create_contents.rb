class CreateContents < ActiveRecord::Migration[7.0]
  def change
    create_table :contents do |t|
      t.string :content
      t.string :translate
      t.references :dictionary, null: false, foreign_key: true

      t.timestamps
    end
  end
end
