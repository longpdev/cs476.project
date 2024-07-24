import {
  adopt,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
} from '../controllers/applicationController';
import express from 'express';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

router.post('/addApplication', adopt);

router.get('/getallapplications', requireAuth, getAllApplications);

router.get('/get-application/:id', requireAuth, getApplicationById);

router.put('updateStatus', requireAuth, updateApplicationStatus);

export default router;
