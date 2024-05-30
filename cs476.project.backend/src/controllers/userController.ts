import UserModel from "../models/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    try{
        let user = await UserModel.findOne({ email: req.body.email });
        user = new UserModel(req.body);
        await user.save();

        const token = jwt.sign(
            { userId: user._id }, 
            process.env.JWT_SECRET as string, 
            { expiresIn: "2d" }
        );

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 172800000,
        })

        return res.sendStatus(200);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Bad error!"});
    }
}