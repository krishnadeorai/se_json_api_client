class ApiCall
	include HTTParty
	base_uri 'se-json-api.herokuapp.com'

	def initialize(url, limit, offset)
    @url = url
    @limit = limit
    @offset = offset
  end

  def get_data
    self.class.get("/#{@url}?" + URI.encode("page[limit]=#{@limit}&page[offset]=#{@offset}"))
  end
end	