class AddThemeIdToContent < ActiveRecord::Migration[7.0]
  def change
    add_column :contents, :theme_id, :bigint
    add_foreign_key :contents, :themes, column: :theme_id
  end
end
