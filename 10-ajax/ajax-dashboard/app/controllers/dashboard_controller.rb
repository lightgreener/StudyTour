class DashboardController < ApplicationController
    def brother
        brother = %w(Chico Harpo Groucho Zeppo Marco).sample
        render :plain => brother
    end
    def time
        render :plain => Time.now
    end
    def uptime
        render :plain => `uptime`
    end

    def info
            brother = %w(Chico Harpo Croucho Zeppo Marco Philpo).sample
            time = Time.now.to_s
            uptime = `uptime`

            render :json => {
                :brother => brother,
                :time => time,
                :uptime => uptime
            }
    end
end
