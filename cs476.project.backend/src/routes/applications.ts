import {
  adopt,
  getAllApplications,
} from '../controllers/applicationController';
import express from 'express';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

router.post('/addApplication', adopt);

router.get('/getallapplications', requireAuth, getAllApplications);

export default router;
