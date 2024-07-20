import { adopt } from '../controllers/questionController';
import express from 'express';

const router = express.Router();

router.post('/addQuestion', adopt);

export default router;
