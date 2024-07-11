import express from "express";
import { Request, Response } from "express";
import multer from "multer";
import Pet, { PetType } from "../models/pets";
import cloudinary from "cloudinary";
import { addPet } from "../controllers/petController";
import { upload } from "../middleware/multer";
import { requireAuth } from "../middleware/auth";
const router = express.Router();

router.post("/", upload.array("imageFiles", 12), addPet);

export default router;
