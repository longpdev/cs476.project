import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users';
import cookieParser from 'cookie-parser';
import path from 'path';
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../cs476.project.UI/dist')));

const assetsPath = path.join(__dirname, '../../cs476.project.UI/src/assets');
console.log('Serving static files from:', assetsPath);

app.use('/src/assets', express.static(assetsPath));
app.use('/api/users', userRoutes);

app.get('/api/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../cs476.project.UI/dist/index.html'));
});

app.listen(3000, () => {
  console.log('congrats! it is running on: http://localhost:3000/');
});
