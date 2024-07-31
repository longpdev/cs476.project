import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import * as express from 'express';
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.cookies.auth_token || req.headers.authorization?.split(' ')[1];
  const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY as string);
  req.userId = (decode as JwtPayload).userId;
  if (!req.userId)
    return res
      .status(401)
      .json({ message: 'Unauthorized! Please login again!' });
  next();
};
