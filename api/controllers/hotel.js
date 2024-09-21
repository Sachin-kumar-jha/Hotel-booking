import Hotel from '../models/hotel.js'

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}


export const updateHotel = async (req, res, next) => {
    let { id } = req.params;
    try {
        const updaatedHotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        return res.status(200).json(updaatedHotel);
    } catch (error) {
        next(error);
    }
}



export const GetByidHotel = async(req,res,next)=>{
    let {id}=req.params;
    try {
        const hotel=await Hotel.findById(id);
        res.status(202).json(hotel);
    } catch (error) {
        next(error);
    }
}


export const GetAllHotel = async(req,res,next)=>{
    try {
        const allhotels=await Hotel.find();
        res.status(202).json(allhotels);
    } catch (error) {
        next(error);
    }
}


export const DeleteHotel = async(req,res,next)=>{
    let {id}=req.params;
    try {
        const deletedHotel=await Hotel.findByIdAndDelete(id);
        res.status(202).json("Hotel has been deleted.");
    } catch (error) {
        next(error);
    }
}