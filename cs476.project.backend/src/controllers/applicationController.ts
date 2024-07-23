import ApplicationModel from '../models/applications';
import { Request, Response } from 'express';

export const adopt = async (req: Request, res: Response) => {
  try {
    let application = new ApplicationModel({ ...req.body });

    await application.save();

    return res.status(200).json({ message: 'Request received!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send request!' });
  }
};

export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const applications = await ApplicationModel.find({});
    res.status(200).json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch applications' });
  }
};

export const getApplicationById = async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const application = await ApplicationModel.findOne({ _id: id });
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get application' });
  }
};
