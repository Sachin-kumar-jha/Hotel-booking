
import User from '../models/user.js'
import bcrypt from "bcrypt";
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export const register= async (req,res,next) => {
    let {username,email,password}=req.body;
    try {
        const hash = bcrypt.hashSync(password,10);
        const newUser=new User({
         username,
         email,
         password:hash
        });
       const savedUser= await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        next(error);
    }
}

export const login= async (req,res,next) => {
    let {username}=req.body;
    try {
        const user= await User.findOne({username});
        if(!user) return next(createError(404,"User not found"))
        let hash= user.password;
        let isPasswordCorrect=bcrypt.compareSync(req.body.password, hash);
        if(!isPasswordCorrect) return next(createError(404,"password not found"));

const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT);
        const {password,isAdmin,...otherDetails}=user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json({...otherDetails});
    } catch (error) {
        next(error);
    }
}