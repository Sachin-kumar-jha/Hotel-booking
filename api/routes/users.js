import express from 'express'
import { Deleteuser, GetAlluser, GetByiduser, Updateuser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router=express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("YOu logged in ");
// });

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
// res.status(203).json("hello ussr you are logged in and you can delete this account");
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.status(203).json("hello ussr you are logged in and you can delete this account");
//     })

//UPDATE
router.put("/:id",verifyUser,Updateuser);

//GET
router.get("/:id",verifyUser,GetByiduser);

//GET ALL
router.get("/",verifyAdmin,GetAlluser);

//DELETE
router.delete("/:id",verifyUser,Deleteuser)


export default router;