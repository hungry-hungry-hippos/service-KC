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

  test('Should return article information', (done) => {
    db.getArticles(1, (err, data) => {
      expect(data.length).toBe(8);
      data.forEach(article => expect(article.restaurantIds).toContain(1));

      done();
    });
  });

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
