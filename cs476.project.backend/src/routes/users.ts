import express from 'express';
import { register, signout } from '../controllers/userController';
import { login } from '../controllers/userController';
import { requireAuth } from '../middleware/auth';
import {
  getAuthUser,
  getAllUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';
const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/signout', signout);

router.get('/verifytoken', requireAuth, getAuthUser);

router.get('/getalluser', requireAuth, getAllUser);

router.put('/updateuser/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
