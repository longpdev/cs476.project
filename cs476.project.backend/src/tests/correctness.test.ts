import supertest, { Request } from 'supertest';
import { app, server } from '../index';
import { generateTestToken } from '../utils/jwtMock';

afterAll(() => {
  server.close();
});

describe('Testing correctness for registering a new user', () => {
  test('Should return a 200 status code and a success message', async () => {
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

describe('Testing correctness for login a valid user', () => {
  test('Should return a 200 status code, and a successful message', async () => {
    const response = await supertest(app).post('/api/users/login').send({
      email: `test@gmail.com`,
      password: '123456',
    });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login succeeded!');
  });
});

describe('Testing get all pets endpoint', () => {
  test('Should return all pets with proper properties', async () => {
    const token = generateTestToken();
    const response = await supertest(app)
      .get('/api/pets/')
      .set('Authorization', `Bearer ${token}`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('age');
    expect(response.body[0]).toHaveProperty('sex');
    expect(response.body[0]).toHaveProperty('breed');
  });
});

describe('Testing get all users endpoint', () => {
  test('Should return all users with proper properties', async () => {
    const token = generateTestToken();
    const response = await supertest(app)
      .get('/api/users/getAllUser')
      .set('Authorization', `Bearer ${token}`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('firstName');
    expect(response.body[0]).toHaveProperty('lastName');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0]).toHaveProperty('phoneNumber');
  });
});
