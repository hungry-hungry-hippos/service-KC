const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hippos');

let restaurantSchema = new mongoose.Schema({
  restaurantId: Number,
  name: String,
  headline: String,
  tags: [{
    name: String,
    icon: String,
  }],
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

let articleSchema = new mongoose.Schema({
  restaurantId: Number,
  name: String,
  url: String,
});

let article = mongoose.model('article', articleSchema);

let reviewSchema = new mongoose.Schema({
  restaurantId: Number,
  name: String,
  image: String,
  rank: String,
  date: String,
  stars: String,
  description: String,
});

let review = mongoose.model('review', reviewSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Database connected!') });
