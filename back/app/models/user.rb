class User < ApplicationRecord
  has_one :dictionary, dependent: :delete

  has_secure_token :access_code, length: 30

  validates :name,
            :presence => true,
            :uniqueness => true,
            length: { in: 4..20, :message => "Must be within 4 and 20" }
  validates :email,
            :presence => true,
            :uniqueness => true
  validates :password,
            :presence => true,
            length: { in: 4..50, :message => "Must be within 4 and 50" }
  validates :birthday,
            :presence => true
  validate  :end_date_is_after_start_date


  private

  def end_date_is_after_start_date
    errors.add(:birthday, 'can not be before or equal to the start date') unless DateTime.now.after?(birthday)
  end
end
