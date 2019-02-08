const { article } = require('./schemas.js');
const { db } = require('./db.js');

// Helper functions
const randIdx = length => Math.floor(Math.random() * length);

const toInclude = (prob, includeVal, notIncludeVal) => {
  if (Math.floor(Math.random() * 100) < prob) return includeVal;
  return notIncludeVal;
};

// Random generation functions


// Store data functions
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected! Ready to insert data...');

  // Generate data
  const articles = [

  ];

  // Insert data
  article.insertMany(articles, (err) => {
    if (err) throw err;
    console.log('Successful insert of articles!');
    db.close(() => console.log('DB closed!'));
  });
});
