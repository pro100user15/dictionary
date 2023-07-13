class ThemeContent < ApplicationRecord
  belongs_to :theme
  belongs_to :content

  validates :theme,
            :presence => true
  validates :content,
            :presence => true
end
