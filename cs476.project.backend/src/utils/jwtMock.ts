import jwt from 'jsonwebtoken';

export const generateTestToken = () => {
  const payload = {
    userId: 'testUserId',
  };
  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY as string, {
    expiresIn: '1h',
  });
  return token;
};
