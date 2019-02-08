const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hippos');

// Model definition
let restaurantSchema = new mongoose.Schema({
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

let restaurant = mongoose.model('restaurant', restaurantSchema);

// Helper functions
const randIdx = (length) => {
  return Math.floor(Math.random() * length);
}

const toInclude = (prob) => {
  if (Math.floor(Math.random() * 100) < prob) return true;
  return false;
}

// Random generation functions
const generateName = () => {
  const colA = ['Amber','American','Artisan','Aster and','Avid','Azure','Bittersweet','Blond','Blue','Boca','Bold','Bon','Bright','Brisk','Bronze',"Captain's",'Captivating','Casa de','Charmed','Charming',"Chef's","Chef's",'Ciao!','Cinnamon','Citron','Cobalt',"Cook's",'Copper','Country','Crafted','Craveable','Craving','Crazy','Crimson','Daily','Dancing','Dandy','Dashing','Dreaming','Eclipsed','Elderflower and','Enchanted','Endless','Epic','Evergreen','Fabled','Fancy',"Farmer's",'Festive','Fine','First','Flying','Follow the','Fort','Funky','Garlic','Gastro','Gilded','Ginger','Glazed','Glorious','Golden','Good','Gourmet','Grand','Great','Gypsy','Handsome','Happy','Hearty','Hickory','Hidden','Howling','Hungry','Indigo','Infinite','Inspired','Ivory','Jeweled','Jolly','Jumping','Juniper','Kindred','Small','Smiling','Southern','Spinning','Spirited','Splendid','Story of the','King',"King's",'Last','Lavish','Le','Leaning','Legendary','Lilac','Little','Lofty','Lone','Lost','Loyal','Lucky','Lyrical','Mad','Magic','Mellow','Merry','Midnight','Moonlit','Moonshine','Mr.','Mrs.','Mystic','Neon','New','Northern','Old Towne','Old','Orange','Original','Ornate','Painted','Pepper','Perfect','Pickled','Plaid','Plum','Polka Dot','Prime','Proud','Pure','Purple',"Queen's",'Rambling','Rare','Red','Regal','Rising',"Rock n' roll",'Rogue','Rolling','Rosy','Round','Royal','Ruby','Runaway','Rustic','Saffron','Sage','Sailing','Sapphire','Saucy','Savory','Scarlet','Secret','Shining','Silver','Singing','Slanted','Strong','Superb','Supreme','Sweet','Swift','Swirled','Swirling','Tart','Tempting','The','The','The','The','The','The','The','The','The','The','The','The','The','The','The','Thirsty','Tilted','Tin','Top','Turquoise','Twirling','Twisted','Uptown','Urban','Velvet','Vintage','Violet','Vivid','Wandering','Wayward','Whispering','Whistling','Wild','Wise'];
	const colB = ['Acorn','Alley','Amore','Anchor','Apple','Arrow','Avenue','Basil','Bazaar','Bear','Bee','Bell','Bicycle','Bite','Blaze','Bliss','Blossom','Bounty','Bowl','Buddha','Bull','Canoe','Canyon','Carrot','Cat','Charm','Cheer','Chef','Chop','Chops','Chow','Ciao!','Cloud','Clover','Coast','Cobbler','Cove','Cow','Crave','Crown','Cuisine','Cup','Dahlia','Delight','Dish','Dove','Elephant','Era','Escape','Fable','Falcon','Farmer','Feast','Fern','Fete','Fiddler','Fig','Fire','Flame','Flash','Folly','Forest','Fork','Fox','Garden','Glass','Gloss','Goblet','Goose','Gourmand','Gourmet','Grace','Grove','Harvest','Hawk','Haystack','Hedgehog','Hen','Heron','Hive','Honeybee','Horizon','Horse','Hour','Hummingbird','Inlet','Iris','Jest','Jester','Journey','Kettle','Ladle','Lady','Lantern','Leaf','Lemon','Light','Lily','Lime','Lion','Loon','Lotus','Mallard','Maple','Merci','Mirror','Moment','Monk','Moose','Mulberry','Nomad','Oak','Ocean','Olive','Opal','Orchid','Outlaw','Owl','Pail','Palm','Pan','Panache','Peacock','Peak','Pearl','Pie','Pig','Pineapple','Pines','Plank','Plate','Plates','Platter','Plum','Prairie','Pug','Rabbit','Robin','Rooster','Root','Rose','Roux','Sailor','Sails','Saucer','Seasons','Spark','Spoon','Stallion','Star','Stone','Street','Table','Tap','Taste','Thistle','Thyme','Tiger','Time','Times','Tractor','Trail','Traveler','Tree','Trolley','Trumpeter','Tryst','Tumbler','Via','Vine','Vista','Vivant','Voila!','Wagon','Wanderer','Wanderlust','Waters','Wave','Way','Whisk','Winds','Wish','Wit','Zebra'];
  const colC = ['& Co.','Bar and Grill','Bar and Grille','Bistro','Bottles + Bites','Café','Canteen','Chophouse','Cookery','Cucina','Cuisine','Eatery','Eats','Farmhouse','House','Inn','Kitchen','Lodge','Lounge','Place','Provisions','Pub','Pubhouse','Restaurant','Ristorante','Roadhouse','Supper Club','Tastes + Taps','Tavern','Trattoria'];

  return `${colA[randIdx(colA.length)]} ${colB[randIdx(colB.length)]}${toInclude(35) ? ' ' + colC[randIdx(colC.length)] : ''}`;
};

const generateHeadline = () => {
  return 'Japanese small plates in a cozy space';
};

const generateTags = () => {
  // Object with format {search, location, price}
  return {
    search: undefined,
    location: 'China Basin',
    price: 3,
  };
};

const generateScores = () => {
  // Object with format {food, decor, service}
  // Values should be between 0.1 and 5.0
  return {
    food: (randIdx(50) + 1)/ 10,
    decor: (randIdx(50) + 1)/ 10,
    service: (randIdx(50) + 1)/ 10,
  };
};

const generateDescription = () => {
  return 'Lorem ipsum dolor amet man bun organic lumbersexual <b>“intelligentsia”</b> jean shorts 90\'s subway tile tofu gentrify. <b>“Gluten-free”</b> photo booth skateboard, irony bicycle rights hell of celiac banh mi knausgaard pinterest <b>“roof party”</b> taiyaki. Gochujang asymmetrical godard <b>“PBR&B bitters”</b>. Humblebrag pour-over banh mi coloring book bitters.';
};

const generateKnownFor = () => {
  // Array of objects with format {name, icon}
  return [
    {
      name: 'Quick bites',
      icon: 'https://zagat.com/assets/knownfor/quick-bites.svg',
    },
    {
      name: 'Takeout',
      icon: 'https://zagat.com/assets/knownfor/takeout.svg',
    },
  ];
};

const generateOrder = () => {
  // Array of objects with format {name, icon}
  return undefined;
};

const generateTip = () => {
  // Return undefined if no tip
  return 'Health goth pop-up lyft raw denim 8-bit stumptown.';
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
  }
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected! Ready to insert data...');
  
  // Generate data
  let restaurants = [
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

  while(restaurants.length <= 2) {
    restaurants.push(generateRestaurant(restaurants.length + 1));
  }

  // Insert data
  restaurant.insertMany(restaurants, (err, data) => {
    if (err) throw err;
    console.log(`Successful insert!`);
    db.close(() => console.log(`DB closed!`));

    return;
  });
});
