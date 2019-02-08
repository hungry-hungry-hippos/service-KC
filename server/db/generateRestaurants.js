const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hippos');

// Model definition
const restaurantSchema = new mongoose.Schema({
  restaurantId: Number,
  name: String,
  headline: String,
  tags: {
    search: String,
    location: String,
    price: Number,
  },
  scores: {
    food: Number,
    decor: Number,
    service: Number,
  },
  description: String,
  knownFor: [{
    name: String,
    icon: String,
  }],
  whatToOrder: [{
    name: String,
    icon: String,
  }],
  insiderTip: String,
});

const restaurant = mongoose.model('restaurant', restaurantSchema);

// Helper functions
const randIdx = length => Math.floor(Math.random() * length);

const toInclude = (prob, includeVal, notIncludeVal) => {
  if (Math.floor(Math.random() * 100) < prob) return includeVal;
  return notIncludeVal;
};

// Random generation functions
const generateName = () => {
  const colA = [
    'Amber',
    'American',
    'Artisan',
    'Aster and',
    'Avid',
    'Azure',
    'Bittersweet',
    'Blond',
    'Blue',
    'Boca',
    'Bold',
    'Bon',
    'Bright',
    'Brisk',
    'Bronze',
    "Captain's",
    'Captivating',
    'Casa de',
    'Charmed',
    'Charming',
    "Chef's",
    "Chef's",
    'Ciao!',
    'Cinnamon',
    'Citron',
    'Cobalt',
    "Cook's",
    'Copper',
    'Country',
    'Crafted',
    'Craveable',
    'Craving',
    'Crazy',
    'Crimson',
    'Daily',
    'Dancing',
    'Dandy',
    'Dashing',
    'Dreaming',
    'Eclipsed',
    'Elderflower and',
    'Enchanted',
    'Endless',
    'Epic',
    'Evergreen',
    'Fabled',
    'Fancy',
    "Farmer's",
    'Festive',
    'Fine',
    'First',
    'Flying',
    'Follow the',
    'Fort',
    'Funky',
    'Garlic',
    'Gastro',
    'Gilded',
    'Ginger',
    'Glazed',
    'Glorious',
    'Golden',
    'Good',
    'Gourmet',
    'Grand',
    'Great',
    'Gypsy',
    'Handsome',
    'Happy',
    'Hearty',
    'Hickory',
    'Hidden',
    'Howling',
    'Hungry',
    'Indigo',
    'Infinite',
    'Inspired',
    'Ivory',
    'Jeweled',
    'Jolly',
    'Jumping',
    'Juniper',
    'Kindred',
    'Small',
    'Smiling',
    'Southern',
    'Spinning',
    'Spirited',
    'Splendid',
    'Story of the',
    'King',
    "King's",
    'Last',
    'Lavish',
    'Le',
    'Leaning',
    'Legendary',
    'Lilac',
    'Little',
    'Lofty',
    'Lone',
    'Lost',
    'Loyal',
    'Lucky',
    'Lyrical',
    'Mad',
    'Magic',
    'Mellow',
    'Merry',
    'Midnight',
    'Moonlit',
    'Moonshine',
    'Mr.',
    'Mrs.',
    'Mystic',
    'Neon',
    'New',
    'Northern',
    'Old Towne',
    'Old',
    'Orange',
    'Original',
    'Ornate',
    'Painted',
    'Pepper',
    'Perfect',
    'Pickled',
    'Plaid',
    'Plum',
    'Polka Dot',
    'Prime',
    'Proud',
    'Pure',
    'Purple',
    "Queen's",
    'Rambling',
    'Rare',
    'Red',
    'Regal',
    'Rising',
    "Rock n' roll",
    'Rogue',
    'Rolling',
    'Rosy',
    'Round',
    'Royal',
    'Ruby',
    'Runaway',
    'Rustic',
    'Saffron',
    'Sage',
    'Sailing',
    'Sapphire',
    'Saucy',
    'Savory',
    'Scarlet',
    'Secret',
    'Shining',
    'Silver',
    'Singing',
    'Slanted',
    'Strong',
    'Superb',
    'Supreme',
    'Sweet',
    'Swift',
    'Swirled',
    'Swirling',
    'Tart',
    'Tempting',
    'The',
    'Thirsty',
    'Tilted',
    'Tin',
    'Top',
    'Turquoise',
    'Twirling',
    'Twisted',
    'Uptown',
    'Urban',
    'Velvet',
    'Vintage',
    'Violet',
    'Vivid',
    'Wandering',
    'Wayward',
    'Whispering',
    'Whistling',
    'Wild',
    'Wise',
  ];
  const colB = [
    'Acorn',
    'Alley',
    'Amore',
    'Anchor',
    'Apple',
    'Arrow',
    'Avenue',
    'Basil',
    'Bazaar',
    'Bear',
    'Bee',
    'Bell',
    'Bicycle',
    'Bite',
    'Blaze',
    'Bliss',
    'Blossom',
    'Bounty',
    'Bowl',
    'Buddha',
    'Bull',
    'Canoe',
    'Canyon',
    'Carrot',
    'Cat',
    'Charm',
    'Cheer',
    'Chef',
    'Chop',
    'Chops',
    'Chow',
    'Ciao!',
    'Cloud',
    'Clover',
    'Coast',
    'Cobbler',
    'Cove',
    'Cow',
    'Crave',
    'Crown',
    'Cuisine',
    'Cup',
    'Dahlia',
    'Delight',
    'Dish',
    'Dove',
    'Elephant',
    'Era',
    'Escape',
    'Fable',
    'Falcon',
    'Farmer',
    'Feast',
    'Fern',
    'Fete',
    'Fiddler',
    'Fig',
    'Fire',
    'Flame',
    'Flash',
    'Folly',
    'Forest',
    'Fork',
    'Fox',
    'Garden',
    'Glass',
    'Gloss',
    'Goblet',
    'Goose',
    'Gourmand',
    'Gourmet',
    'Grace',
    'Grove',
    'Harvest',
    'Hawk',
    'Haystack',
    'Hedgehog',
    'Hen',
    'Heron',
    'Hive',
    'Honeybee',
    'Horizon',
    'Horse',
    'Hour',
    'Hummingbird',
    'Inlet',
    'Iris',
    'Jest',
    'Jester',
    'Journey',
    'Kettle',
    'Ladle',
    'Lady',
    'Lantern',
    'Leaf',
    'Lemon',
    'Light',
    'Lily',
    'Lime',
    'Lion',
    'Loon',
    'Lotus',
    'Mallard',
    'Maple',
    'Merci',
    'Mirror',
    'Moment',
    'Monk',
    'Moose',
    'Mulberry',
    'Nomad',
    'Oak',
    'Ocean',
    'Olive',
    'Opal',
    'Orchid',
    'Outlaw',
    'Owl',
    'Pail',
    'Palm',
    'Pan',
    'Panache',
    'Peacock',
    'Peak',
    'Pearl',
    'Pie',
    'Pig',
    'Pineapple',
    'Pines',
    'Plank',
    'Plate',
    'Plates',
    'Platter',
    'Plum',
    'Prairie',
    'Pug',
    'Rabbit',
    'Robin',
    'Rooster',
    'Root',
    'Rose',
    'Roux',
    'Sailor',
    'Sails',
    'Saucer',
    'Seasons',
    'Spark',
    'Spoon',
    'Stallion',
    'Star',
    'Stone',
    'Street',
    'Table',
    'Tap',
    'Taste',
    'Thistle',
    'Thyme',
    'Tiger',
    'Time',
    'Times',
    'Tractor',
    'Trail',
    'Traveler',
    'Tree',
    'Trolley',
    'Trumpeter',
    'Tryst',
    'Tumbler',
    'Via',
    'Vine',
    'Vista',
    'Vivant',
    'Voila!',
    'Wagon',
    'Wanderer',
    'Wanderlust',
    'Waters',
    'Wave',
    'Way',
    'Whisk',
    'Winds',
    'Wish',
    'Wit',
    'Zebra',
  ];

  const colC = [
    '& Co.',
    'Bar and Grill',
    'Bar and Grille',
    'Bistro',
    'Bottles + Bites',
    'Café',
    'Canteen',
    'Chophouse',
    'Cookery',
    'Cucina',
    'Cuisine',
    'Eatery',
    'Eats',
    'Farmhouse',
    'House',
    'Inn',
    'Kitchen',
    'Lodge',
    'Lounge',
    'Place',
    'Provisions',
    'Pub',
    'Pubhouse',
    'Restaurant',
    'Ristorante',
    'Roadhouse',
    'Supper Club',
    'Tastes + Taps',
    'Tavern',
    'Trattoria',
  ];

  return `${colA[randIdx(colA.length)]} ${colB[randIdx(colB.length)]}${toInclude(35, ' ' + colC[randIdx(colC.length)], '')}`;
};

const generateHeadline = () => {
  const headlines = [
    'Japanese small plates in a cozy space',
    'Southern American soul-food restaurant',
    'American breakfast, lunch & brunch',
    'Gourmet grilled-cheese sandwiches',
    'Beer-focused eatery near ballpark',
    'Spot for craft drinks & upscale bites',
    'Celebrated French seafood restaurant',
    'Relaxed, upscale New American spot',
    'Celebrated Brooklyn chophouse since 1887',
    'Upscale French fare in elegant surrounds',
  ];

  return toInclude(70, headlines[randIdx(headlines.length)], undefined);
};

const generateTags = () => {
  const searchTerms = [
    'Breakfast',
    'Bar',
    'Japanese',
    'American',
    'French',
    'Steakhouse',
    'Seafood',
    'Pizza',
    'Vegan',
    'Burger',
    'Brunch',
    'Chinese',
    'Indian',
    'Mexican',
    'Sushi',
    'Thai',
    'Vegetarian',
    'Vietnamese',
  ];
  const locations = [
    'China Basin',
    'South Beach',
    'Inner Sunset',
    'Russian Hill',
    'West 50s',
    'Greenwich Village',
    'Williamsburg',
    'West 40s',
    'Embarcadero',
    'Chinatown',
    'SoMa',
    'Pacific Heights',
    'Hayes Valley',
    'Downtown',
    'The Mission',
  ];

  return {
    search: toInclude(60, searchTerms[randIdx(searchTerms.length)], undefined),
    location: toInclude(85, locations[randIdx(locations.length)], undefined),
    price: randIdx(3) + 1,
  };
};

const generateScores = () => {
  return {
    food: (randIdx(50) + 1) / 10,
    decor: (randIdx(50) + 1) / 10,
    service: (randIdx(50) + 1) / 10,
  };
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor amet man bun organic lumbersexual <b>“intelligentsia”</b> jean shorts 90\'s subway tile tofu gentrify. <b>“Gluten-free”</b> photo booth skateboard, irony bicycle rights hell of celiac banh mi knausgaard pinterest <b>“roof party”</b> taiyaki. Gochujang asymmetrical godard <b>“PBR&B bitters”</b>. Humblebrag pour-over banh mi coloring book bitters.',
    'Health goth pop-up lyft <b>“raw denim”</b> 8-bit stumptown.',
    'Twee jean shorts wolf prism, chartreuse cloud bread lyft DIY woke helvetica master cleanse hashtag marfa air plant. Art party street art gentrify umami portland PBR&B brunch raclette dreamcatcher bitters four loko aesthetic mixtape.',
    'Photo booth meditation 90\'s af bushwick green juice. Cloud bread skateboard <b>“freegan”</b> adaptogen banjo XOXO you probably haven\'t heard of them actually meggings affogato slow-carb. Affogato asymmetrical <b>“poutine”</b> air plant fixie waistcoat farm-to-table yr slow-carb church-key art party pour-over meditation. Meditation occupy skateboard kitsch deep v, <b>“cloud bread waistcoat pop-up forage ugh tousled irony.',
    'Tacos poke tbh wayfarers. Kinfolk twee occupy, flannel +1 <b>“fingerstache”</b> pitchfork bespoke direct trade godard. Kombucha godard man bun biodiesel bicycle rights kitsch. Gochujang flannel fingerstache helvetica. Try-hard fanny pack jianbing truffaut neutra <b>“90\'s”</b> pug taxidermy. Pinterest waistcoat synth, artisan seitan etsy beard cold-pressed VHS freegan. Venmo shabby chic next level polaroid hell of snackwave beard echo park actually kogi narwhal.',
    'Tilde brooklyn <b>“roof party”</b> chicharrones semiotics, master cleanse hammock trust fund retro man bun. Kinfolk kale chips raclette shabby chic yuccie meditation. Butcher tousled affogato next level jean shorts. <b>“Next level”</b> green juice pickled vice mlkshk slow-carb <b>“seitan”</b> hashtag edison bulb you probably haven\'t heard of them cronut <b>“listicle”</b> blue bottle ennui plaid. Typewriter portland palo santo prism.',
    'From a birthday cake latte spiced up with sprinkles to a flight of toasts in three different flavors, this friendly San Francisco chainlet promises creative snacks and well-priced coffee shop standards served in airy, modern environs.',
    'Dressed up with bondage-themed artwork and red flocked wallpaper suggestive of a super-sexy Victorian parlor, this swanky Mission entry features a dramatic illuminated bar and specialty cocktails; the even cozier back room is often reserved for private parties.',
    'Expect noodle bowls, rice plates, spring rolls and other affordable Asian classics at this low-key El Cerrito establishment just a few blocks from the Bart station. Light woods and warm-hued walls add a welcoming vibe to a casual space decked out with banquette, table and counter seats, plus a small private dining area and one standout table crafted from a rustic tree trunk.',
    '<b>“Tumeric”</b> pok pok marfa kinfolk lo-fi. Twee <b>“meditation quinoa”</b> iPhone wolf activated charcoal chambray tofu tote bag mlkshk whatever microdosing salvia. Brooklyn austin chia normcore <b>“pabst tacos”</b> activated charcoal vegan vinyl ethical celiac plaid health goth church-key deep v. Disrupt aesthetic cliche, affogato pour-over palo santo slow-carb banh mi cardigan offal. Actually cray hashtag, artisan mlkshk affogato williamsburg offal readymade venmo pickled air plant man bun hexagon <b>“gluten-free”</b>.',
    'Messenger bag affogato copper mug marfa. Fixie succulents banh mi <b>“butcher af”</b> kickstarter master cleanse echo park salvia. Af raclette thundercats, tumeric next level schlitz kombucha asymmetrical live-edge adaptogen etsy. IPhone portland etsy neutra. <b>“Normcore”</b> kitsch jean shorts, pop-up organic pok pok fashion axe <b>“lumbersexual”</b> portland actually YOLO enamel pin. DIY shoreditch meditation echo park fingerstache cronut.',
  ];
  return toInclude(80, descriptions[randIdx(descriptions.length)], undefined);
};

const generateKnownFor = () => {
  // To do: replace links with S3 links
  const knowns = [
    {
      name: 'Quick bites',
      icon: 'https://zagat.com/assets/knownfor/quick-bites.svg',
    },
    {
      name: 'Takeout',
      icon: 'https://zagat.com/assets/knownfor/takeout.svg',
    },
    {
      name: 'Breakfast',
      icon: 'https://zagat.com/assets/knownfor/breakfast.svg',
    },
    {
      name: 'Lunch',
      icon: 'https://zagat.com/assets/knownfor/lunch.svg',
    },
    {
      name: 'Outdoor seating',
      icon: 'https://zagat.com/assets/knownfor/outdoor-seating.svg',
    },
    {
      name: 'Lively scenes',
      icon: 'https://zagat.com/assets/knownfor/lively-scenes.svg',
    },
    {
      name: 'After-work crowds',
      icon: 'https://zagat.com/assets/knownfor/placeholder.svg',
    },
    {
      name: 'Great beers',
      icon: 'https://zagat.com/assets/knownfor/great-beers.svg',
    },
    {
      name: 'Special occasions',
      icon: 'https://www.zagat.com/assets/knownfor/special-occasions.svg',
    },
    {
      name: 'Online reservations',
      icon: 'https://zagat.com/assets/knownfor/placeholder.svg',
    },
  ];

  const numberKnowns = randIdx(5) + 1;
  const knownFor = [];
  for (let i = 0; i < numberKnowns; i++) {
    knownFor.push(knowns[randIdx(knowns.length)]);
  }

  return toInclude(90, knownFor, undefined);
};

const generateOrder = () => {
  // To do: replace links with S3 links
  const orders = [
    {
      name: 'Tuna tartare',
      icon: 'https://storage.googleapis.com/zagat-top-places/2014-10-new-york-city/GothamBarandGrill_TunaTartare_2.jpg?max-w=305&auto=format',
    },
    {
      name: 'Porterhouse steak',
      icon: 'https://storage.googleapis.com/zagat-top-places/Peter_Luger_Porterhouse._Emily_Schindler.jpg?max-w=305&auto=format',
    },
    {
      name: 'Sizzling bacon',
      icon: 'https://storage.googleapis.com/zagat-top-places/Peter_Luger_Bacon._Noah_Deveraux.jpg?max-w=305&auto=format',
    },
    {
      name: 'Burger',
      icon: 'https://storage.googleapis.com/zagat-top-places/2014-10-new-york-city/PeterLuger_Burger_5.jpg?max-w=305&auto=format',
    },
    {
      name: 'Royale w/ cheese',
      icon: 'https://storage.googleapis.com/zagat-top-places/2014-10-new-york-city/PeterLuger_Burger_5.jpg?max-w=305&auto=format',
    },
    {
      name: 'Quarter pounder w/ cheese',
      icon: 'https://storage.googleapis.com/zagat-top-places/2014-10-new-york-city/PeterLuger_Burger_5.jpg?max-w=305&auto=format',
    },
  ];

  const numberOrders = randIdx(3) + 1;
  const whatToOrder = [];
  for (let i = 0; i < numberOrders; i++) {
    whatToOrder.push(orders[randIdx(orders.length)]);
  }
  return toInclude(10, whatToOrder, undefined);
};

const generateTip = () => {
  // Return undefined if no tip
  const tips = [
    'Health goth pop-up lyft raw denim 8-bit stumptown.',
    'For an affordable taste of that legendary dry-aged Luger beef, go at lunchtime and order the burger for $14 (served daily till 3:45PM).',
    'Ugh shaman meggings, farm-to-table synth raclette gentrify bitters.',
    'Biodiesel put a bird on it coloring book YOLO.',
    'You probably haven\'t heard of them street art taiyaki tofu tbh banjo. Gochujang taiyaki butcher salvia mumblecore meggings lumbersexual poutine kitsch vape.',
    'Poutine hoodie vice PBR&B helvetica coloring book.',
    'Raw denim mixtape kinfolk, brooklyn offal street art forage slow-carb.',
    'Small batch portland stumptown schlitz +1, waistcoat iPhone celiac. Disrupt kogi polaroid, tilde typewriter tumblr art party 90\'s artisan.',
  ];
  return toInclude(10, tips[randIdx(tips.length)], undefined);
};

const generateRestaurant = (id) => {
  return {
    restaurantId: id,
    name: generateName(),
    headline: generateHeadline(),
    tags: generateTags(),
    scores: generateScores(),
    description: generateDescription(),
    knownFor: generateKnownFor(),
    whatToOrder: generateOrder(),
    insiderTip: generateTip(),
  };
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected! Ready to insert data...');

  // Generate data
  const restaurants = [
    {
      restaurantId: 1,
      name: 'Izakaya Sozai',
      headline: 'Japanese small plates in a cozy space',
      tags: {
        search: 'Japanese',
        location: 'Inner Sunset',
        price: 1,
      },
      scores: {
        food: 4.5,
        decor: 3.9,
        service: 4.0,
      },
      description: 'Purists are <b>“blown away”</b> by the <b>“traditional”</b> small plates – like <b>“staggeringly good”</b> yakitori and <b>“exceptional”</b> ramen in a <b>“delicious porky broth”</b> – at this <b>“cozy”</b> Inner Sunset Japanese that also pours <b>“amazing”</b> sakes; prices are moderate, and though you\'ll likely have to <b>“wait outside”</b> for a seat in the <b>“tiny”</b> space, fans say the <b>“friendly owner”</b> has captured <b>"the true spirit of izakaya."</b>',
      knownFor: [
        {
          name: 'Dinner',
          icon: 'https://zagat.com/assets/knownfor/placeholder.svg',
        },
        {
          name: 'Takeout',
          icon: 'https://zagat.com/assets/knownfor/takeout.svg',
        },
      ],
    },
  ];

  while (restaurants.length < 100) {
    restaurants.push(generateRestaurant(restaurants.length + 1));
  }

  // Insert data
  restaurant.insertMany(restaurants, (err) => {
    if (err) throw err;
    console.log('Successful insert of restaurants!');
    db.close(() => console.log('DB closed!'));
  });
});
