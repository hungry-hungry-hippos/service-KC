const mongoose = require('mongoose');

// Restaurant model definition
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

// Article model definition
const articleSchema = new mongoose.Schema({
  restaurantIds: [Number],
  name: String,
  url: String,
});

const article = mongoose.model('article', articleSchema);

// Review model definition
const reviewSchema = new mongoose.Schema({
  restaurantId: Number,
  name: String,
  image: String,
  rank: String,
  date: String,
  stars: String,
  description: String,
});

const review = mongoose.model('review', reviewSchema);

module.exports = {
  restaurant,
  article,
  review,
};
