import supertest, { Request } from 'supertest';
import { app, server } from '../index';
import { generateTestToken } from '../utils/jwtMock';
import { uploadImage } from '../utils/uploadImage';
afterAll(() => {
  server.close();
});

describe('Testing robustness for register a new user with existing email', () => {
  test('when the email has already been used, should return a 400 status and a message', async () => {
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
});

describe('Testing robustness for login an invalid user with invalid email', () => {
  test('Should return a 400 status code, and a failure message', async () => {
    const response = await supertest(app).post('/api/users/login').send({
      email: `test/gmail.com`,
      password: '123456',
    });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Email is invalid');
  });
});

describe('Testing robustness for adding a new pet with good data', () => {
  test('should added new pet', async () => {
    const token = generateTestToken();
    const response = await supertest(app)
      .post('/api/pets/addpet')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Rocky',
        age: '2 years',
        breed: 'Huskie',
        imageUrl: '',
        sex: 'male',
        category: 'dog',
        description: 'Beautfiul dog',
        trained: 'well',
        health: 'well',
        colour: 'white',
        height: '3 feet',
        weight: '100 lbs',
        accommodative: 'good',
        createdDate: Date.now(),
        status: 'available',
      });
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Image is required');
  });
});
