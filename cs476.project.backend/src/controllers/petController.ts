import express from "express";
import { Request, Response } from "express";
import multer from "multer";
import Pet, { PetType } from "../models/pets";
import cloudinary from "cloudinary";
import { uploadImages } from "../utils/uploadImages";

export const addPet = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const newPet: PetType = req.body;
    const imageUrls = await uploadImages(files);
    newPet.imageURLs = imageUrls;
    const pet = new Pet(newPet);
    await pet.save();
    res.status(201).send(pet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Upload image went wrong" });
  }
};
