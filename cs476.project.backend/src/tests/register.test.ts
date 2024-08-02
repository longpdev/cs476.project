import supertest, { Request } from 'supertest';
import { app, server } from '../index';
import { generateTestToken } from '../utils/jwtMock';

afterAll(() => {
  server.close();
});

describe('POST api/users/getalluser', () => {
  describe('given a valid token', () => {
    test('should return all user', async () => {
      const token = generateTestToken();
      const response = await supertest(app)
        .get('/api/users/getalluser')
        .set('Authorization', `Bearer ${token}`)
        .send();
      expect(response.status).toBe(200);
    });
  });
});
