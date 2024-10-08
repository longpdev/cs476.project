import mongoose from 'mongoose';

type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  postalCode: string;
  phoneNumber: string;
  blocked: boolean;
  createdDate: Date;
  isAdmin: boolean;
  petIds: string[];
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  postalCode: { type: String, required: true },
  phoneNumber: { type: String, unique: true },
  blocked: { type: Boolean, default: false },
  createdDate: { type: Date, default: Date.now, required: false },
  isAdmin: { type: Boolean, default: false },
  petIds: { type: [String], default: [], required: false },
});

const UserModel = mongoose.model<UserType>('User', userSchema);

export { UserType };
export default UserModel;
