import QuestionModel from '../models/questions';
import { Request, Response } from 'express';

export const adopt = async (req: Request, res: Response) => {
  try {
    let question = new QuestionModel({ ...req.body });

    await question.save();

    return res.status(200).json({ message: 'Request received!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send request!' });
  }
};
