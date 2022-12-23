class ApplicationController < ActionController::API
  include ActionController::Cookies

  
  private
  
  def authorize
    return render json: { error: "Please Log in or Sign Up" }, status: :unauthorized unless session.include? :user_id
  end

end
