import supertest, { Request } from 'supertest';
import { app, server } from '../index';
import { generateTestToken } from '../utils/jwtMock';

afterAll(() => {
  server.close();
});

describe('Register user', () => {
  describe('given all required information', () => {
    test('Should return a 400 status code, when the email has already been used', async () => {
      const response = await supertest(app).post('/api/users/register').send({
        email: 'notunique@gmail.com',
        password: '12345678',
        firstName: 'Long',
        lastName: 'Pham',
        postalCode: 'S4S 1A1',
        phoneNumber: '11111111',
        blocked: 'false',
        isAdmin: 'true',
      });
      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Your email has already been used!');
    });

    test('Should return a 200 status code, when the email is not existsing', async () => {
      const response = await supertest(app)
        .post('/api/users/register')
        .send({
          email: `unique${Date.now()}@gmail.com`,
          password: '12345678',
          firstName: 'Long',
          lastName: 'Pham',
          postalCode: 'S4S 1A1',
          phoneNumber: '111',
          blocked: 'false',
          isAdmin: 'true',
        });
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Register succeed!');
    });
  });
});
