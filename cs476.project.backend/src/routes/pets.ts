import express from 'express';
import { Request, Response } from 'express';
import Pet, { PetType } from '../models/pets';
import { addPet, getAllPet } from '../controllers/petController';
import { upload } from '../middleware/multer';
const router = express.Router();

router.post('/addPet', upload.array('imageFiles', 12), addPet);

router.get('/', getAllPet);

export default router;
