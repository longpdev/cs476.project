import mongoose from "mongoose";

type PetType = {
  //_id: number;
  breed: string;
  image: string;
  name: string;
  age: string;
  sex: string;
  category: string;
  description: string;
  trained: string;
  characteristics: string;
  health: string;
  colour: string;
  height: string;
  weight: string;
  accommodative: string;
};

const petSchema = new mongoose.Schema({
 //_id: { type: Number, required: true, unique: true },
  breed: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  sex: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  trained: { type: String, required: true },
  characteristics: { type: String, required: true },
  health: { type: String, required: true },
  colour: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  accommodative: { type: String, required: true },
  createdDate: { type: Date, default: Date.now, required: false },
});

const PetModel = mongoose.model<PetType>("Pet", petSchema);

export { PetType };
export default PetModel;
