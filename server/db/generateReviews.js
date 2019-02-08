const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hippos');

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
db.once('open', () => {
  console.log('Database connected! Ready to insert data...');

  // Insert data
});
