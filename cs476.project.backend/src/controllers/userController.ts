import UserModel from '../models/user';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export const register = async (req: Request, res: Response) => {
  //const email = req.body.email;
  // const password = req.body.password;
  // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const namePattern = /^[A-Za-z]+$/;
  const phoneNumberPattern = /^[0-9]+$/;
  const postalCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  const { email, password, firstname, lastName, phoneNumber, postalCode } =
    req.body;

  //const phoneNumber = req.body.phoneNumber;

  try {
    let existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: 'Your email has already been used!' });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 characters' });

    if (!emailPattern.test(email))
      return res.status(400).json({ message: 'Email is invalid' });
    if (!namePattern.test(firstname))
      return res.status(400).json({ message: 'First Name is ' });
    if (!namePattern.test(lastName))
      return res.status(400).json({ message: 'Lastname is invalid' });
    if (!phoneNumberPattern.test(phoneNumber))
      return res.status(400).json({ message: 'Phone number is invalid' });
    if (!postalCodePattern.test(postalCode))
      return res.status(400).json({ message: 'Postal code is invalid' });
    const securedPassword = await bcrypt.hash(password, 10);
    let user = new UserModel({ ...req.body, password: securedPassword });
    await user.save();

    return res.status(200).json({ message: 'Register succeed!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Register Failed. Bad error!' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email))
    return res.status(400).json({ message: 'Email is invalid' });

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Credentials are invalid!' });
    }

    if (user.blocked) {
      return res
        .status(403)
        .json({ message: 'User is blocked. Cannot login.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Password is invalid!' });
    }

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

    return res.status(200).json({ message: 'Login succeeded!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed. Server error.' });
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

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName, email, phoneNumber } = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { firstName, lastName, email, phoneNumber },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate if id is a valid ObjectId
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

export const blockUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { blocked } = req.body;

  try {
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.blocked = blocked;
    await user.save();

    return res.status(200).json({
      message: `User ${blocked ? 'blocked' : 'unblocked'} successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update user block status' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const user = await UserModel.findOne({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get pet' });
  }
};

export const updateUserPetIds = async (req: Request, res: Response) => {
  try {
    const { id, adoptedPetId } = req.body;
    const user = await UserModel.findByIdAndUpdate(
      id,
      { $push: { petIds: adoptedPetId } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.save();
  } catch (error) {
    res.status(500).json({ message: 'Failed to update User status' });
  }
};
