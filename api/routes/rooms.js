import express from 'express'
import { createRoom, DeleteRoom, GetAllRoom, GetByidRoom, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();

//CREATE 
router.post("/:hotelid",verifyAdmin,createRoom);

//UPDATE
router.put("/:id",verifyAdmin,updateRoom);

//GET
router.get("/:id",GetByidRoom);

//GET ALL
router.get("/",GetAllRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin,DeleteRoom);



export default router;