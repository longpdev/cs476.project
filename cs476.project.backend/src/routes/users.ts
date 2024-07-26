import express from 'express';
import {
  getUserById,
  register,
  signout,
  updateUserPetIds,
} from '../controllers/userController';
import { login } from '../controllers/userController';
import { requireAuth } from '../middleware/auth';
import {
  getAuthUser,
  getAllUser,
  updateUser,
  deleteUser,
  blockUser,
} from '../controllers/userController';
const router = express.Router();

router.get('/getUserById/:id', getUserById);

router.post('/register', register);

router.post('/login', login);

router.post('/signout', signout);

router.get('/verifytoken', requireAuth, getAuthUser);

router.get('/getalluser', requireAuth, getAllUser);

router.put('/updateuser/:id', updateUser);

router.put('/blocked/:id', blockUser);

router.delete('/:id', deleteUser);

router.put('/updateUserPetIds', updateUserPetIds);

export default router;
