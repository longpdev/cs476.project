import mongoose from 'mongoose';
export type PetType = {
  _id: string;
  name: string;
  breed: string;
  imageURLs: string[];
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
};

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  imageURLs: { type: [String], required: true },
  createdDate: { type: Date, default: Date.now, required: false },
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
});

const Pet = mongoose.model<PetType>('Pet', petSchema);
export default Pet;
