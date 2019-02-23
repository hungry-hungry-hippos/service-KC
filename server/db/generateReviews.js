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
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo1.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo2.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo3.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo4.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo5.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo6.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo7.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo8.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo9.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo10.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo11.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo12.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo13.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo14.png',
    'https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/reviewers/photo15.png',
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

  db.dropCollection('reviews', () => {
    // Generate data
    const reviews = [];
    let numReviews;
    for (let i = 1; i <= 100; i += 1) {
      numReviews = i === 1 ? 14 : randIdx(15) + 1;
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
});
