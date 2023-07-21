class User < ApplicationRecord
  has_one :dictionary, dependent: :delete

  has_secure_token :access_code, length: 30

  validates :name,
            :presence => true,
            length: { in: 4..20, :message => "Must be within 4 and 20" }
  validates :surname,
            :presence => true,
            length: { in: 4..20, :message => "Must be within 4 and 20" }
  validates :email,
            :presence => true,
            :uniqueness => true
  validates :password,
            :presence => true,
            length: { in: 4..200, :message => "Must be within 4 and 200" }
end
