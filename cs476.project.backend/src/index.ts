import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import cookieParser from "cookie-parser";
import PetModel from "./models/pet"; 
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/users", userRoutes);

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello world!" });
});

router.get("/pets", async (req, res) => {
  try {
    const pets = await PetModel.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching pets" });
  }
});

app.listen(3000, () => {
  console.log("congrats! it is running on port 3000");
});

export default router;
