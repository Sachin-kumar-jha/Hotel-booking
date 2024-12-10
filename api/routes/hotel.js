import express from 'express'
import {countByType, countByCity, createHotel, DeleteHotel, GetAllHotel, GetByidHotel, updateHotel, getHotelRooms } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();

//CREATE 
router.post("/",verifyAdmin,createHotel);

//UPDATE
router.put("/:id",verifyAdmin,updateHotel);

//DELETE
router.delete("/:id", verifyAdmin,DeleteHotel);


//GET
router.get("/find/:id",GetByidHotel);

//GET ALL
router.get("/",GetAllHotel);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);





export default router;