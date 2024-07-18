import express from 'express';
import { adopt } from '../controllers/questionController';

const router = express.Router();

router.post('/questions', adopt);

export default router;
