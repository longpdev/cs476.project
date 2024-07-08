import express from 'express';
import { Request, Response } from 'express';
import Pet, { PetType } from '../models/pets';
import { addPet } from '../controllers/petController';
import { upload } from '../middleware/multer';
const router = express.Router();

router.post('/addPet', upload.array('imageFiles', 12), addPet);

router.get('/', async (req: Request, res: Response) => {
  try {
    const pets = await Pet.find({});
    res.status(200).json(pets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error get all pets', error });
  }
});

export default router;
