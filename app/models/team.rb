class Team < ApplicationRecord
    has_many :players
    has_many :reviews
    has_many :users, through: :reviews
    belongs_to :competition, dependent: :destroy
    
    validates :name, presence: true, uniqueness: true
end
