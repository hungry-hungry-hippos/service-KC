const mongoose = require('mongoose');
const { restaurant, article, review } = require('./schemas.js');

mongoose.connect('mongodb://172.17.0.3:27017/hippos');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Database connected!'); });

const getRestaurant = (id, cb) => {
  restaurant.findOne({ restaurantId: id }, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const getArticles = (id, cb) => {
  article.find({ restaurantIds: id }, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const getReviews = (id, cb) => {
  review.find({ restaurantId: id }, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  })
    .limit(5);
};

module.exports = {
  db,
  getRestaurant,
  getArticles,
  getReviews,
};
