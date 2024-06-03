import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import sendEmail from "./utils/emailSender";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRoutes);

app.get("/api/test", async (req: Request, res: Response) => {
  //res.json({ message: "Hello world!" });
  return sendEmail(
    "akoiralaaa@gmail.com",
    "petAdoption@gmail.com",
    "Test Email",
    "This is a test email sent using Nodemailer."
  );
});

app.listen(3000, () => {
  console.log("congrats! it is running on port 3000");
});
