class User < ApplicationRecord
    has_secure_password
    has_many :competitions
    has_many :reviews
    has_many :teams, through: :reviews
    
    validates :username, presence: true, uniqueness: true
end
