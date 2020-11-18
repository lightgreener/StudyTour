require 'httparty'  # const xhr = XMLHttpRequest
response = HTTParty.get 'http://numbersapi.com/random/trivia' #sync
puts response
