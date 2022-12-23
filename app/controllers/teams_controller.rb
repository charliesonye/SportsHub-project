class TeamsController < ApplicationController
    # before_action :authorize

    def index
        teams = Team.all
        render json: teams
    end

    def show
        team = Team.find_by(id: params[:id])
        render json: team
    end

    def create
        team = Team.create({
            name: params[:name],
            competition_id: params[:competition_id]
        })
        render json: team
    end
end
