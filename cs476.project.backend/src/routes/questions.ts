import { adopt, getAllQuestions } from '../controllers/questionController';
import express from 'express';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

router.post('/addQuestion', adopt);

router.get('/getallquestions', requireAuth, getAllQuestions);

export default router;
