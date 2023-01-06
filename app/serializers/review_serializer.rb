class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :team_id, :comments
  has_one :user
  has_one :team
end
