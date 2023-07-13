class Tag < ApplicationRecord
  belongs_to :dictionary

  validates :name,
            :presence => true,
            length: { in: 4..50, :message => "Must be within 2 and 50" }

  validates :dictionary,
            :presence => true
end
