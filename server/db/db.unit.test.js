const db = require('./db.js');

afterAll(() => db.db.close());

describe('DB Data Retrieval', () => {
  test('Should return restaurant information', (done) => {
    db.getRestaurant(1, (err, data) => {
      expect(data.name).toBe('Izakaya Sozai');
      expect(data.headline).toBe('Japanese small plates in a cozy space');

      done();
    });
  });

  // Note: on data regeneration, tests need to be rewritten
  // Alternatively: maybe look into snapshot tests
  test('Should return article information', (done) => {
    db.getArticles(4, (err, data) => {
      expect(data.length).toBe(4);
      data.forEach(article => expect(article.restaurantIds).toContain(4));

      done();
    });
  });

  // Note: on data regeneration, tests need to be rewritten
  // Alternatively: maybe look into snapshot tests
  test('Should return review information', (done) => {
    db.getReviews(1, (err, data) => {
      expect(data.length).toBe(14);
      data.forEach((review) => {
        expect(review.restaurantId).toBe(1);
        expect(Number.parseFloat(review.stars)).toBeGreaterThanOrEqual(0.5);
        expect(Number.parseFloat(review.stars)).toBeLessThanOrEqual(5);
      });

      done();
    });
  });
});
