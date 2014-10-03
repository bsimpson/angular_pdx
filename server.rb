# encoding: UTF-8

require 'sinatra'
require 'json'

products = [
    { id: 1,  name: '7-in Android tablet',        price: '39.99',  created_at: '2014-10-02T21:12:25.814Z', description: "Are your children always asking to use your smartphone or tablet to play games? Then it's time to give them a tablet suitable for their age. We're offering a kids 7\" Android 4.1 Tablet and it's available here for just £43.98, helping you to save a whopping 60% from the original price of £109.99 ." },
    { id: 2,  name: 'Ladies Owl Satchel',         price: '19.99',  created_at: '2014-10-04T21:14:25.814Z', description: "Adding a little character to your everyday outfits, this cheeky little owl bag comes in black, blue, orange, brown, pink, or red, and you can choose a colour when redeeming your voucher." },
    { id: 3,  name: '1200 piece Loom bands kit',  price: '14.99',  created_at: '2014-10-01T21:13:23.814Z', description: "Now with 69% off, you'll be able to make cool new creations to your heart's content. Each kit includes one weaving frame, one loom crochet hook with a weaving function, 6000 pieces rubber bands (with 20 different colours), 200 s-clips and 20 pendants, all in a handy storage box." },
    { id: 4,  name: 'Food container set',         price: '4.99',   created_at: '2014-10-03T21:13:25.816Z', description: "A push-button mechanism creates an airtight seal with just one touch and serves as a handle to lift off the lid.  Designed for modular stacking, these square POP containers make the most of storage space and its corners allow for easy pouring."},
    { id: 5,  name: 'Garden tool',                price: '7.99',   created_at: '2014-10-11T21:12:25.816Z', description: "This tool kit is both mighty and one amazing deal! It's a kit that will help you get not just one job, but many jobs done with ease. Start off or add to your collection of tools with this 100-piece kit, including storage box, which could be yours for our deal price of £17.98." }
]

# index route
get '/products' do
  products.to_json
end

# Adding show route
get '/products/:id' do
  products.detect { |product| product[:id].to_s == params[:id] }.to_json
end

get '/' do
  erb :index
end
