class PlayersController < ApplicationController
    before_action :user_authorizer, only: [:create]

    def index
        players = Player.all
        render json: players
    end

    def create
        player = Player.create!({
            name: params[:name],
            position: params[:position],
            team_id: params[:team_id]
        })
        render json: player
    end

    def search
        player = Player.where("position = ?", params[:position])
        render json: player        

    
    end
    

end
