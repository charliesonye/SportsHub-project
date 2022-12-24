class ReviewsController < ApplicationController

    def index
        
        reviews = Review.all
        render json: reviews 
    end

    def create
        user = User.find_by(id: session[:user_id])
        review = user.reviews.create(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:user_id, :team_id, :comments)
    end

end
