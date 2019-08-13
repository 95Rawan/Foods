BEGIN;
DROP TABLE IF EXISTS foods CASCADE;

create table foods (
  id serial primary key,
  foodname varchar not null,
  country text not null,
  img text not null,
  description text not null
);

insert into foods(foodname, country, img, description) values
  ('Rendang', 'Indonesia', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170306143659-rendang.jpg', 'Reader Kamal F Chaniago showed great foresight when he wrote, "Rendang is the best." A clear winner with a loyal following, this beefy dish can now rightfully claim the title of "Worlds Most Delicious Food." Beef is slowly simmered with coconut milk and a mixture of lemongrass, galangal, garlic, turmeric, ginger and chilies, then left to stew for a few hours to create this dish of tender, flavorful bovine goodness.The Indonesian dish is often served at ceremonial occasions and to honored guests. Its not only delicious but also comes with a simple recipe. If you havent already, go ahead and take reader Isabela Desitas advice: "Rendang should be the first! Its really nice, you should try!"'),

  ('Nasi goreng', 'Indonesia', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170306143034-buba-nasi-goreng.jpg', '"I like rendang and nasi goreng, two of most popular food in Indonesia!" Reader Rizky Ramadhikas got it. And thousands of other voters agreed. The wonder of combining rice with egg, chicken and prawns strikes again. The second fried rice to make the list, this Indonesian delight received more than 10 times the vote of its Thai counterpart, propelling the former from non-runner to runner-up.'),

  ('Sushi', 'Japan', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140422102716-sushi.jpg', 'When Japan wants to build something right, it builds it really right. Brand giants such as Toyota, Nintendo, Sony, Nikon and Yamaha may have been created by people fueled by nothing more complicated than raw fish and rice, but its how the fish and rice is put together that makes this a global first-date favorite. This perfect marriage between raw fish and rice has easily kept sushi in the top five. And like one reader, Nymayor, wrote, "Now to be fair, DELICIOUS can be simple." The Japanese dont live practically forever for no reason -- they want to keep eating this stuff.'),

  ('Tom yam goong', 'Thailand', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170306145011-tom-yam-goong.jpg', 'Reader Supot Sakulwongtana made it clear that "delicious includes a little bit hot." A little bit hot is right because you need room for a load more flavors too. This Thai masterpiece teems with shrimp, mushrooms, tomatoes, lemongrass, galangal and kaffir lime leaves. Usually loaded with coconut milk and cream, the hearty soup unifies a host of favorite Thai tastes: sour, salty, spicy and sweet. Best of all is the price: cheap.'),

  ('Pad thai', 'Thailand', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170306142710-pad-thai.jpg', 'Heres a food Thai people cant live without. Similar to Bulgogi, pad thai is packed with nutrients stirred into one glorious fried-noodle dish. The secrets in the sauce -- tamarind paste. If anyone ever creates a Hall of Food Fame, that should be first on the list.');

COMMIT;