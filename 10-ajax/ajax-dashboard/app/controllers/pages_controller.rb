class PagesController < ApplicationController
  def home
      @brother = %w(Chico Harpo Groucho).sample
      @time = Time.now
      @uptime = `uptime`  # this does not work on heroku

  end
end
