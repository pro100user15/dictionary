class Dictionary < ApplicationRecord
  belongs_to :user
  has_many :themes, dependent: :delete_all

  validates :user,
            :presence => true
end
