import express from 'express';
import {register} from '../controllers/userController';
import { login } from '../controllers/userController';
const router = express.Router();

router.post("/register", register);

router.post("/login", login);

export default router;