# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Team.destroy_all

10.times do
    Team.create(name:Faker::Sports::Football.unique.team)
    User.create(
        username:Faker::Hacker.unique.verb,
        password_digest:Faker::Code.unique.sin
        )

end


111.times do
    Player.create(
        name:Faker::Sports::Football.unique.player,
        position:Faker::Sports::Football.position,
        team_id:rand(Team.first.id..Team.last.id)
        )
end
