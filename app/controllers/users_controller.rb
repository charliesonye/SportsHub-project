class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :password_digest)
    end
end
