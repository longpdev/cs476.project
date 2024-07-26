import express from 'express';
import {
  addPet,
  getAllPet,
  updatePetById,
  getPetById,
  deletePetById,
  updatePetStatusById,
} from '../controllers/petController';
import { upload } from '../middleware/multer';
const router = express.Router();

router.post('/addPet', upload.array('imageFiles', 10), addPet);

router.get('/', getAllPet);

router.get('/getPet/:id', getPetById);

router.put('/updatePet/:id', upload.array('imageFiles', 10), updatePetById);

router.delete('/deletePet/:id', deletePetById);

router.put('/updatepetowner', updatePetStatusById);

export default router;
