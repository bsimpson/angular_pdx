require 'sinatra'
require 'json'

get '/products' do
  [
    { id: 1, name: '7-in Android tablet', price: '39.99' },
    { id: 2, name: 'Ladies Owl Satchel', price: '19.99' },
    { id: 3, name: '1200 piece Loom bands kit', price: '14.99' },
    { id: 4, name: 'Food container set', price: '4.99' },
    { id: 5, name: 'Garden tool', price: '7.99' }
  ].to_json
end

get '/' do
  erb :index
end
