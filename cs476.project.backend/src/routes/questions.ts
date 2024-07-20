import { adopt } from '../controllers/questionController';
import express from 'express';

const router = express.Router();

router.post('/questions', adopt);

export default router;
