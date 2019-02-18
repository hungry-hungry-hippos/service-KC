const { article } = require('./schemas.js');
const { db } = require('./db.js');

// Helper functions
const randIdx = length => Math.floor(Math.random() * length);

// Random generation functions
const generateRestaurants = () => {
  const linked = randIdx(8) + 1;
  const restaurants = [];
  while (restaurants.length < linked) {
    restaurants.push(randIdx(99) + 2);
  }
  return restaurants;
};

const generateName = () => {
  const names = [
    'Best Beer Spots in San Francisco',
    'Best New American Restaurants in San Francisco',
    'The 50 Best Restaurants in San Francisco',
    'Best Brunches in San Francisco',
    'Best Restaurants in Russian Hill',
    'SF\'s 8 Hottest Restaurant Trends of 2015',
    '3 Delicious (and Affordable) Prix Fixe Menus in SF',
    'Stones Throw Remixes Toad in The Hole',
    'SF\'s 10 Hottest New Brunches',
    'ICHI, Commonwealth & More Join Stones Throw For Charity Dinners',
  ];
  return names[randIdx(names.length)];
};

const generateImage = () => {
  const images = [
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/Belcampo.jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/GettyImages-137737392.jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/MouradFamilyStyle.jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/Octavia_SF_AubriePick_090916.jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/Saru_Sushi_Cracker-Virginia_Miller.jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/dirtywater1.jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/fogcitybrunch_sf.jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/outerlands.spencercotton..jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/rsz_1601_bar__kitchen_desgustation_offerings.jpg',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/stonesthrowtoad_sf.jpg',
  ];
  return images[randIdx(images.length)];
};

const generateArticle = () => (
  {
    restaurantIds: generateRestaurants(),
    name: generateName(),
    image: generateImage(),
  }
);

// Store data functions
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected! Ready to insert data...');

  // Generate data
  const articles = [];

  while (articles.length < 20) {
    articles.push(generateArticle());
  }

  for (let i = 0; i < 8; i += 1) {
    articles[i].restaurantIds.push(1);
  }

  // Insert data
  article.insertMany(articles, (err) => {
    if (err) throw err;
    console.log('Successful insert of articles!');
    db.close(() => console.log('DB closed!'));
  });
});
