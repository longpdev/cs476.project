import mongoose from 'mongoose';
export type PetType = {
  _id: string;
  name: string;
  breed: string;
  imageURLs: string[];
};

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  imageURLs: { type: [String], required: true },
  createdDate: { type: Date, default: Date.now, required: false },
});

const Pet = mongoose.model<PetType>('Pet', petSchema);
export default Pet;
