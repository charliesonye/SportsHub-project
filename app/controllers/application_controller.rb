class ApplicationController < ActionController::API
  include ActionController::Cookies

  
  private


  
  # def authorize
  #   return render json: { error: "Please Log in or Sign Up" }, status: :unauthorized unless session.include? :user_id
  # end
  # def authorize
  #   user = User.find_by(id: session[:user_id])
  #   competition = Competition.find_by(id: params[:id])

  #   return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  # end

end
