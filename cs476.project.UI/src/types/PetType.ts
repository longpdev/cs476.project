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
};
