class Dictionary < ApplicationRecord
  belongs_to :user

  validates :dictionary,
            :presence => true
end
