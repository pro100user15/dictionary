class CreateThemeContents < ActiveRecord::Migration[7.0]
  def change
    create_table :theme_contents do |t|
      t.references :theme, null: false, foreign_key: true
      t.references :content, null: false, foreign_key: true

      t.timestamps
    end
  end
end
