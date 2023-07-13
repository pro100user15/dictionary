class Theme < ApplicationRecord
  belongs_to :dictionary
  belongs_to :theme

  validates :dictionary,
            :presence => true
  validates :name,
            :presence => true,
            length: { in: 4..50, :message => "Must be within 2 and 50" }
end
