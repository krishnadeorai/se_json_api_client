class PhoneNumbersController < ApplicationController
	def index
		
	end

	def get_number_list
		result = ApiCall.new('/phone-numbers', params['page']['limit'], params['page']['offset']).get_data
		render :json => result.to_json
	end
end
