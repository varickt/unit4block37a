const request = require('supertest');
const app = require('../app');

describe('Reviews Endpoints', () => {
  it('should create a new review', async () => {
    const res = await request(app)
      .post('/api/items/1/reviews')
      .send({
        text: 'Excellent product!',
        rating: 5
      })
      .set('Authorization', 'Bearer <your-token>'); // Replace <your-token> with a valid token
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should fetch reviews for an item', async () => {
    const res = await request(app).get('/api/items/1/reviews'); // Adjust with a valid item ID
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should delete a review', async () => {
    const res = await request(app)
      .delete('/api/users/1/reviews/1') // Adjust with valid user/review ID
      .set('Authorization', 'Bearer <your-token>');
    expect(res.statusCode).toEqual(204);
  });
});
