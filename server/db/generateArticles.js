const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hippos');

const articleSchema = new mongoose.Schema({
  restaurantId: Number,
  name: String,
  url: String,
});

const article = mongoose.model('article', articleSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected! Ready to insert data...');

  // Insert data
});
