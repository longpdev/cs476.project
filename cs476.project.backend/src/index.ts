import express, { Request, Response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import cookieParser from "cookie-parser";
import path from "path";
import petRoutes from "./routes/pets";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
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

app.use(express.static(path.join(__dirname, "../../cs476.project.UI/dist")));

//Disable the following line to use hot reload from frontend
const assetsPath = path.join(__dirname, "../../cs476.project.UI/src/assets");
console.log("Serving static files from:", assetsPath);

app.use("/src/assets", express.static(assetsPath));


app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.get('/api/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../cs476.project.UI/dist/index.html"));
});

app.listen(3000, () => {
  console.log("congrats! it is running on: http://localhost:3000/");
});

// app.listen(7000, () => {
//   console.log('congrats! it is running on: http://localhost:5173/');
// });
