require 'sinatra'
require 'json'

get '/products' do
  [
    { id: 1,  name: '7-in Android tablet',        price: '39.99',  created_at: '2014-10-02T21:12:25.814Z' },
    { id: 2,  name: 'Ladies Owl Satchel',         price: '19.99',  created_at: '2014-10-04T21:14:25.814Z' },
    { id: 3,  name: '1200 piece Loom bands kit',  price: '14.99',  created_at: '2014-10-01T21:13:23.814Z' },
    { id: 4,  name: 'Food container set',         price: '4.99',   created_at: '2014-10-03T21:13:25.816Z' },
    { id: 5,  name: 'Garden tool',                price: '7.99',   created_at: '2014-10-11T21:12:25.816Z' }
  ].to_json
end

get '/' do
  erb :index
end
