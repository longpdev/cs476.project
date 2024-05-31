import UserModel from "../models/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        let existingUser = await UserModel.findOne({ email: req.body.email });
        if(existingUser)
            return res.status(400).json({message: "Your email has already been used!"});
        const securedPassword = await bcrypt.hash(password, 10);
        let user = new UserModel({...req.body, password: securedPassword,});
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