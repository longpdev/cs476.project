import express from 'express';
import {
  addPet,
  getAllPet,
  updatePetById,
  getPetById,
  deletePetById,
  updatePetStatusById,
} from '../controllers/petController';
import { requireAuth } from '../middleware/auth';
import { upload } from '../middleware/multer';
const router = express.Router();

router.post('/addPet', requireAuth, upload.single('imageFile'), addPet);

router.get('/', getAllPet);

router.get('/getPet/:id', getPetById);

router.put(
  '/updatePet/:id',
  requireAuth,
  upload.single('imageFile'),
  updatePetById
);

router.delete('/deletePet/:id', requireAuth, deletePetById);

router.put('/updatePetOwner', requireAuth, updatePetStatusById);

export default router;
