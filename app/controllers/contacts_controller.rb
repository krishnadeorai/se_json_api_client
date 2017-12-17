class ContactsController < ApplicationController

	def index

	end

	def get_contact_list
		result = ApiCall.new('/contacts', params['page']['limit'], params['page']['offset']).get_data
		render :json => result.to_json
	end

end
