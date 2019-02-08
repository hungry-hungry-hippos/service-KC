const { review } = require('./schemas.js');
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

  // Insert data
});
