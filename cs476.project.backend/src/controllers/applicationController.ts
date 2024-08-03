import ApplicationModel from '../models/applications';
import { Request, Response } from 'express';
import notifier from '../observer/notifier';
import emailObserver from '../observer/observer';

notifier.addObserver(emailObserver);

export const adopt = async (req: Request, res: Response) => {
  try {
    let application = new ApplicationModel({ ...req.body });

    await application.save();

    notifier.notifyObservers({
      email: application.email,
      subject: 'Your adoption request has been received',
      text: `Hi ${application.firstName},  Your request has been received, an admin will review your application soon. Please watch your adoption status in My Adoptions page.`,
      html: `Hi ${application.firstName}, <br><br>  Your request has been received, an admin will review your application soon. Please watch your adoption status in My Adoptions page. <br><br> Best, <br>Pet Adoption Team`,
    });

    return res.status(200).json({ message: 'Request received!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send request!' });
  }
};

export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const applications = await ApplicationModel.find({})
      .sort({ createdDate: -1 })
      .exec();
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

  if (!['approved', 'rejected', 'pending'].includes(status)) {
    return res
      .status(400)
      .json({
        message: 'Invalid status, status should be approved or rejected',
      });
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
      notifier.notifyObservers({
        email: application.email,
        subject: 'Adoption request decision',
        text: `Hi ${application.firstName}, Your application has been approved. You can now view your adoption status in My Adoptions page.`,
        html: `Hi ${application.firstName}, <br><br> Your application has been approved. You can now view your adoption status in My Adoptions page. <br><br> Best, <br>Pet Adoption Team`,
      });
    } else if (status === 'rejected') {
      notifier.notifyObservers({
        email: application.email,
        subject: 'Adoption request decision',
        text: `Hi ${application.firstName}, Your application has been rejected. You can now view your adoption status in My Adoptions page.`,
        html: `Hi ${application.firstName}, <br><br> Your application has been rejected. You can now view your adoption status in My Adoptions page. <br><br> Best, <br>Pet Adoption Team`,
      });
    }

    return res.status(200).json(application);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Failed to update application status' });
  }
};
