class SessionController < ApplicationController
  def new
  end

  def create
    # raise "hell"
  # params [:email]
  # find a user
  user =User.find_by :email => params[:email]
  # if the user exists and bcrypt (params[:password])
  if user.present? && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect_to root_path
  else
    session[:error] = " Invalid name or pwd"
    redirect_to login_path

    end
  end


def destroy
  session[:user_id] =nil
  redirect_to login_path
end


end
