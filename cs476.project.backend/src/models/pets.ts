import { stat } from 'fs';
import mongoose from 'mongoose';
export type PetType = {
  _id: string;
  name: string;
  breed: string;
  imageURL: string;
  age: string;
  sex: string;
  category: string;
  description: string;
  trained: string;
  health: string;
  colour: string;
  height: string;
  weight: string;
  accommodative: string;
  createdDate: string;
  status: 'available' | 'adopted' | 'pending';
  ownerId: string;
};

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  imageURL: { type: String, required: true },
  age: { type: String, required: true },
  sex: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  trained: { type: String, required: true },
  health: { type: String, required: true },
  colour: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  accommodative: { type: String, required: true },
  createdDate: { type: Date, default: Date.now, required: false },
  status: {
    type: String,
    required: true,
    enum: ['available', 'adopted', 'pending'],
    default: 'available',
  },
  ownerId: { type: String, default: '', required: false },
});

const Pet = mongoose.model<PetType>('Pet', petSchema);
export default Pet;
