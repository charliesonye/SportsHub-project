class PlayersController < ApplicationController
    # before_action :authorize

    def index
        players = Player.all
        render json: players
    end

    def create
        player = Player.create({
            name: params[:name],
            position: params[:position],
            team_id: params[:team_id]
        })
        render json: player
    end

    

end
