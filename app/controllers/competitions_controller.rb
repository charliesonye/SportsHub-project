class CompetitionsController < ApplicationController
    
    def index
        competitions = Competition.all
        render json: competitions
    end
    
    def show
        competition = Competition.find_by(id: params[:id])
        render json: competition, include: :teams
    end

    def create
        competition = Competition.create({name: params[:name]})
        render json: competition
    end

    def update
        competition = Competition.find_by(id: params[:id])
        competition.update(name: params[:name])
        render json: competition
    end

    def destroy
        competition = Competition.find_by(id: params[:id])
        competition.destroy
    end
end
