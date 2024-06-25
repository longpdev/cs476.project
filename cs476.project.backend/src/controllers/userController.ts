import UserModel from '../models/user';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response) => {
  //const email = req.body.email;
  const password = req.body.password;
  //const phoneNumber = req.body.phoneNumber;

  try {
    //check if email has been used before
    let existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: 'Your email has already been used!' });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 characters' });

    // //check if contact number has been used before
    // let existingphoneNumber = await UserModel.findOne({
    //   phoneNumber: req.body.phoneNumber,
    // });
    // if (existingphoneNumber)
    //   return res
    //     .status(400)
    //     .json({ message: "Contact number has already been used" });

    const securedPassword = await bcrypt.hash(password, 10);
    let user = new UserModel({ ...req.body, password: securedPassword });
    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: '1d' }
    );

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400000,
    });

    return res.status(200).json({ message: 'Register succeed!' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Credentials is invalid!' });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: 'Password is invalid!' });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: '1d' }
    );

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400000,
    });

    return res.status(200).json({ message: 'Login succeed!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login Failed. Bad error!' });
  }
};

export const getAuthUser = (req: Request, res: Response) => {
  try {
    return res.status(200).send({ userId: req.userId });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to get user!' });
  }
};

export const signout = (req: Request, res: Response) => {
  res.cookie('auth_token', '', { expires: new Date(0), httpOnly: true });
  res.status(200).json({ message: 'Sign out succeed!' });
};
