class Content < ApplicationRecord
  belongs_to :dictionary

  validates :content,
            :presence => true,
            :allow_blank => false

  validates :translate,
            :presence => true,
            :allow_blank => false

  validates :dictionary,
            :presence => true
end
