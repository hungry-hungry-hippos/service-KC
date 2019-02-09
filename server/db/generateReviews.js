const { review } = require('./schemas.js');
const { db } = require('./db.js');

// Helper functions
const randIdx = length => Math.floor(Math.random() * length);

// Random generation functions
const generateName = () => {
  const names = [
    'Vincent Edwards',
    'Lisa Sims',
    'Julius Clayton',
    'Fredrick Malone',
    'Sergio Hudson',
    'Herman Hoffman',
    'Clifton Estrada',
    'Susan Klein',
    'Candace Garza',
    'Sonia Mcbride',
    'Benny Stanley',
    'Archie Cole',
    'Micheal Duncan',
    'Phillip Harper',
    'Marie Matthews',
    'Sue Welch',
    'Donald Shelton',
    'Roberta Holland',
    'Margarita Jackson',
    'Ronnie Palmer',
    'Alfred Fisher',
    'Julie Webster',
    'Tim Crawford',
    'James Webb',
    'Jasmine Gray',
  ];
  return names[randIdx(names.length)];
};

const generateImage = () => {
  // To do: replace links with S3 links
  const images = [
    'https://lh5.googleusercontent.com/-jZCBVrHrdeY/AAAAAAAAAAI/AAAAAAAAAAA/OlSItSEoE9k/s128-c0x00000000-cc-rp-mo/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh3.googleusercontent.com/-M7caQIC3lBI/AAAAAAAAAAI/AAAAAAAApYk/Qi-Gn-9JCWM/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh5.googleusercontent.com/-b_7KOG_FH3o/AAAAAAAAAAI/AAAAAAAAAK0/ASwrkoxefD8/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh6.googleusercontent.com/-WvjDLC5nwgw/AAAAAAAAAAI/AAAAAAAAdRg/kBt10ocW8wc/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh6.googleusercontent.com/-MdF87otfb4o/AAAAAAAAAAI/AAAAAAAAp-w/YpyPa47drgE/s128-c0x00000000-cc-rp-mo-ba6/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh3.googleusercontent.com/-Ab6SQAB34DQ/AAAAAAAAAAI/AAAAAAAADJs/U_viI_2rgtg/s128-c0x00000000-cc-rp-mo/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh3.googleusercontent.com/-Rg1PFsVVgjg/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcbQlgBC5NRLs5vFusxxv0_xviKKKg/s128-c0x00000000-cc-rp-mo/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh6.googleusercontent.com/-PhdoB7MXoQo/AAAAAAAAAAI/AAAAAAAAIPE/hC5lXDckO-w/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh6.googleusercontent.com/-YWcsCzz9yhQ/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaBrUwH31HSKdRBIAGeKU4Y9gKi2Q/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh4.googleusercontent.com/-3n4gMfKTd24/AAAAAAAAAAI/AAAAAAAAFDg/0bBQ86IkOcA/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh3.googleusercontent.com/-wEtoE6bm1jQ/AAAAAAAAAAI/AAAAAAAA_Ks/xNordB-q3AM/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh6.googleusercontent.com/-TfirkFn_hbA/AAAAAAAAAAI/AAAAAAAAUzw/mVv55rcliUQ/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh3.googleusercontent.com/-eBnLXZtCFow/AAAAAAAAAAI/AAAAAAAAA-M/DL-gmJg0-nw/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh3.googleusercontent.com/-_7BLXG3HH7E/AAAAAAAAAAI/AAAAAAAAAUk/QyM5MXHq-4E/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
    'https://lh3.googleusercontent.com/-4kMewEMD34w/AAAAAAAAAAI/AAAAAAAA5VU/noTNlUhmKic/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
  ];
  return images[randIdx(images.length)];
};

const generateRank = () => randIdx(10) + 1;

const generateDate = () => {
  const dates = [
    'January 4, 2019',
    'February 14, 2018',
    'March 23, 2019',
    'April 17, 2016',
    'May 10, 2017',
    'June 1, 2016',
    'July 29, 2015',
    'August 1, 2014',
    'September 2, 2013',
    'October 3, 2012',
    'November 12, 2011',
    'December 23, 2018',
  ];
  return dates[randIdx(dates.length)];
};

const generateStars = () => (randIdx(10) + 1) / 2;

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor amet man bun organic lumbersexual intelligentsia jean shorts 90\'s subway tile tofu gentrify. Gluten-free photo booth skateboard, irony bicycle rights hell of celiac banh mi knausgaard pinterest roof party taiyaki. Gochujang asymmetrical godard PBR&B bitters. Humblebrag pour-over banh mi coloring book bitters.',
    'Health goth pop-up lyft raw denim 8-bit stumptown.',
    'Twee jean shorts wolf prism, chartreuse cloud bread lyft DIY woke helvetica master cleanse hashtag marfa air plant. Art party street art gentrify umami portland PBR&B brunch raclette dreamcatcher bitters four loko aesthetic mixtape.',
    'Photo booth meditation 90\'s af bushwick green juice. Cloud bread skateboard freegan adaptogen banjo XOXO you probably haven\'t heard of them actually meggings affogato slow-carb. Affogato asymmetrical poutine air plant fixie waistcoat farm-to-table yr slow-carb church-key art party pour-over meditation. Meditation occupy skateboard kitsch deep v, cloud bread waistcoat pop-up forage ugh tousled irony.',
    'Tacos poke tbh wayfarers. Kinfolk twee occupy, flannel +1 fingerstache pitchfork bespoke direct trade godard. Kombucha godard man bun biodiesel bicycle rights kitsch. Gochujang flannel fingerstache helvetica. Try-hard fanny pack jianbing truffaut neutra 90\'s pug taxidermy. Pinterest waistcoat synth, artisan seitan etsy beard cold-pressed VHS freegan. Venmo shabby chic next level polaroid hell of snackwave beard echo park actually kogi narwhal.',
    'Tilde brooklyn roof party chicharrones semiotics, master cleanse hammock trust fund retro man bun. Kinfolk kale chips raclette shabby chic yuccie meditation. Butcher tousled affogato next level jean shorts. Next level green juice pickled vice mlkshk slow-carb seitan hashtag edison bulb you probably haven\'t heard of them cronut listicle blue bottle ennui plaid. Typewriter portland palo santo prism.',
    'From a birthday cake latte spiced up with sprinkles to a flight of toasts in three different flavors, this friendly San Francisco chainlet promises creative snacks and well-priced coffee shop standards served in airy, modern environs.',
    'Dressed up with bondage-themed artwork and red flocked wallpaper suggestive of a super-sexy Victorian parlor, this swanky Mission entry features a dramatic illuminated bar and specialty cocktails; the even cozier back room is often reserved for private parties.',
    'Expect noodle bowls, rice plates, spring rolls and other affordable Asian classics at this low-key El Cerrito establishment just a few blocks from the Bart station. Light woods and warm-hued walls add a welcoming vibe to a casual space decked out with banquette, table and counter seats, plus a small private dining area and one standout table crafted from a rustic tree trunk.',
    'Tumeric pok pok marfa kinfolk lo-fi. Twee meditation quinoa iPhone wolf activated charcoal chambray tofu tote bag mlkshk whatever microdosing salvia. Brooklyn austin chia normcore pabst tacos activated charcoal vegan vinyl ethical celiac plaid health goth church-key deep v. Disrupt aesthetic cliche, affogato pour-over palo santo slow-carb banh mi cardigan offal. Actually cray hashtag, artisan mlkshk affogato williamsburg offal readymade venmo pickled air plant man bun hexagon gluten-free.',
    'Messenger bag affogato copper mug marfa. Fixie succulents banh mi butcher af kickstarter master cleanse echo park salvia. Af raclette thundercats, tumeric next level schlitz kombucha asymmetrical live-edge adaptogen etsy. IPhone portland etsy neutra. Normcore kitsch jean shorts, pop-up organic pok pok fashion axe lumbersexual portland actually YOLO enamel pin. DIY shoreditch meditation echo park fingerstache cronut.',
  ];
  return descriptions[randIdx(descriptions.length)];
};

const generateReview = id => (
  {
    restaurantId: id,
    name: generateName(),
    image: generateImage(),
    rank: generateRank(),
    date: generateDate(),
    stars: generateStars(),
    description: generateDescription(),
  }
);

// Store data functions
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected! Ready to insert data...');

  // Generate data
  const reviews = [];
  let numReviews;
  for (let i = 1; i <= 100; i += 1) {
    numReviews = randIdx(15) + 1;
    while (numReviews > 0) {
      reviews.push(generateReview(i));
      numReviews -= 1;
    }
  }

  // Insert data
  review.insertMany(reviews, (err) => {
    if (err) throw err;
    console.log('Successful insert of reviews!');
    db.close(() => console.log('DB closed!'));
  });
});
