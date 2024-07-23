import {
  adopt,
  getAllApplications,
  getApplicationById,
} from '../controllers/applicationController';
import express from 'express';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

router.post('/addApplication', adopt);

router.get('/getallapplications', requireAuth, getAllApplications);

router.get('/get-application/:id', requireAuth, getApplicationById);

export default router;
