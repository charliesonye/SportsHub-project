# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Team.destroy_all
# Competition.destroy_all
# Player.destroy_all


# 10.times do
    
    
#     Competition.create({
#       name:Faker::Sports::Football.unique.competition,
#       user_id:rand(1..3)
#     })
#     Team.create(
#         name:Faker::Sports::Football.unique.team,
#         competition_id: rand(Competition.first.id..Competition.last.id)
#         )

# end


# 111.times do
#     Player.create(
#         name:Faker::Sports::Football.unique.player,
#         position:Faker::Sports::Football.position,
#         team_id:rand(Team.first.id..Team.last.id)
#         )
# end


Review.create({user_id: 1,
team_id: rand(Team.first.id..Team.last.id), 
comments: "Needs to change Goal-Keeper" 
})
Review.create({user_id: 1,
team_id: rand(Team.first.id..Team.last.id),
 comments: "Best group of teams competing in this league" 
})
Review.create({user_id: 2,
 team_id: rand(Team.first.id..Team.last.id),
  comments: "Looking forward to seeing Juventus players play" 
})
Review.create({user_id: 2,
 team_id: rand(Team.first.id..Team.last.id),
  comments: "I could play for this team" 
})
