class TagContent < ApplicationRecord
  belongs_to :tag
  belongs_to :content

  validates :tag,
            :presence => true
  validates :content,
            :presence => true
end
