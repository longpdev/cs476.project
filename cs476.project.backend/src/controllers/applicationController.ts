import ApplicationModel from '../models/applications';
import { Request, Response } from 'express';
import { sendEmail } from '../utils/emailService';
import notifier from '../observer/notifier';
import emailObserver from '../observer/observer';

notifier.addObserver(emailObserver);

export const adopt = async (req: Request, res: Response) => {
  try {
    let application = new ApplicationModel({ ...req.body });

    await application.save();

    notifier.notifyObservers({
      email: application.email,
      subject: 'Pet adoption request ✔',
      text: 'Your request has been received.',
      html: '<p>Your request has been received.</p>',
    });

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

export const updateApplicationStatus = async (req: Request, res: Response) => {
  const { id, status } = req.body;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const application = await ApplicationModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (status === 'approved') {
      await sendEmail(
        application.email,
        'Pet adoption decision ✔',
        'Your application has been approved.',
        '<p>Your application has been approved.</p>'
      );
    } else if (status === 'rejected') {
      await sendEmail(
        application.email,
        'Pet adoption decision ✔',
        'Your application has been rejected.',
        '<p>Your application has been rejected.</p>'
      );
    }

    return res.status(200).json(application);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Failed to update application status' });
  }
};
