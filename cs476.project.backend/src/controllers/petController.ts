import { Request, Response } from 'express';
import Pet, { PetType } from '../models/pets';
import { uploadImages } from '../utils/uploadImages';

export const addPet = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const newPet: PetType = req.body;
    const imageUrls = await uploadImages(files);
    newPet.imageURLs = imageUrls;
    const pet = new Pet(newPet);
    await pet.save();
    res.status(201).send(pet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Upload image went wrong' });
  }
};

export const getAllPet = async (req: Request, res: Response) => {
  try {
    const pets = await Pet.find({});
    res.status(200).json(pets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error get all pets', error });
  }
};

export const updatePetById = async (req: Request, res: Response) => {
  try {
    const updatedPet: PetType = req.body;

    const pet = await Pet.findByIdAndUpdate(updatedPet._id, updatedPet, {
      new: true,
    });

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    const files = req.files as Express.Multer.File[];
    const updatedImages = await uploadImages(files);

    pet.imageURLs = [...updatedImages];
    await pet.save();
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update pet' + error });
  }
};

export const getPetById = async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const pet = await Pet.findOne({ _id: id });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get pet' });
  }
};

export const deletePetById = async (req: Request, res: Response) => {
  try {
    const petId = req.params.id.toString();
    const pet = await Pet.findByIdAndDelete(petId);

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete pet! ' });
  }
};

export const updatePetStatusById = async (req: Request, res: Response) => {
  try {
    const { id, isAdopted, ownerId } = req.body;
    const pet = await Pet.findByIdAndUpdate(
      id,
      { isAdopted, ownerId },
      { new: true }
    );
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    await pet.save();
  } catch (error) {
    res.status(500).json({ message: 'Failed to update pet status' });
  }
};
