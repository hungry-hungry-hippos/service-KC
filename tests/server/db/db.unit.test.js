const db = require('../../../server/db/db.js');

afterAll(() => db.db.close());

test('Should return restaurant information', (done) => {
  db.getRestaurant(1, (err, data) => {
    expect(data.name).toBe('Izakaya Sozai');
    expect(data.headline).toBe('Japanese small plates in a cozy space');

    done();
  });
});

test('Should return restaurant information', (done) => {
  db.getRestaurant(1, (err, data) => {
    expect(data.name).toBe('Izakaya Sozai');
    expect(data.headline).toBe('Japanese small plates in a cozy space');

    done();
  });
});
