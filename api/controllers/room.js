import Room from "../models/Room.js";
import hotel from "../models/hotel.js";

export const createRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body);

    try {
        const savedRoom= await newRoom.save();
        try {
            await hotel.findByIdAndUpdate(hotelId,{
                $push:{
                    rooms:savedRoom._id,
                }
            })
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
}

export const updateRoom = async (req, res, next) => {
    let { id } = req.params;
    try {
        const updaatedRoom = await Room.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        return res.status(200).json(updaatedRoom);
    } catch (error) {
        next(error);
    }
}



export const GetByidRoom = async(req,res,next)=>{
    let {id}=req.params;
    try {
        const room=await Room.findById(id);
        res.status(202).json(room);
    } catch (error) {
        next(error);
    }
}


export const GetAllRoom = async(req,res,next)=>{
    try {
        const allRooms=await Room.find();
        res.status(202).json(allRooms);
    } catch (error) {
        next(error);
    }
}


export const DeleteRoom = async(req,res,next)=>{
    let {id}=req.params;
    const hotelId=req.params.hotelid;
    try {
        await Room.findByIdAndDelete(id);
        try {
            await hotel.findByIdAndUpdate(hotelId,{
                $pull:{
                    rooms:req.params.id,
                }
            })
        } catch (error) {
            next(error);
        }
        res.status(202).json("Room has been deleted.");
    } catch (error) {
        next(error);
    }
}