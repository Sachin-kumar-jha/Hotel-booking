import express from 'express'
import { createHotel, DeleteHotel, GetAllHotel, GetByidHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();

//CREATE 
router.post("/",verifyAdmin,createHotel);

//UPDATE
router.put("/:id",verifyAdmin,updateHotel);

//GET
router.get("/:id",GetByidHotel);

//GET ALL
router.get("/",GetAllHotel);

//DELETE
router.delete("/:id", verifyAdmin,DeleteHotel)



export default router;