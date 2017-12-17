Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'contacts' => 'contacts#index'
  get 'contacts/get_contact_list' => 'contacts#get_contact_list'
  get 'phone_numbers/get_number_list' => 'phone_numbers/get_number_list'
  get 'phone_numbers' => 'phone_numbers#index'
end
