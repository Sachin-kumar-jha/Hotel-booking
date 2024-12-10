import Hotel from '../models/hotel.js'
import Room from '../models/Room.js';

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
    let{limit,min,max,...others}=req.query;
    try {
        const allhotels=await Hotel.find({...others,cheapestPrice:{$gt:min | 1,$lt:max |999 }}).limit(limit);
        res.status(202).json(allhotels);
    } catch (error) {
        next(error);
    }
}

export const countByCity = async(req,res,next)=>{
    const cities=req.query.cities.split(",");
    try {
        const list=await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city});
        }))
        res.status(202).json(list);
    } catch (error) {
        next(error);
    }
}

export const countByType = async(req,res,next)=>{
    const hotelCount= await Hotel.countDocuments({type:"hotel"})
    const apartmentCount= await Hotel.countDocuments({type:"apartment"})
    const resortCount= await Hotel.countDocuments({type:"resort"})
    const villaCount= await Hotel.countDocuments({type:"villa"})
    const cabinCount= await Hotel.countDocuments({type:"cabin"})
    try {
        res.status(202).json([
            {type:"hotel",count:hotelCount},
            {type:"apartment",count:apartmentCount},
            {type:"resort",count:resortCount},
            {type:"villa",count:villaCount},
            {type:"cabin",count:cabinCount},
        ]);
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


export const getHotelRooms=async (req,res,next)=>{
    try{
       const hotel= await Hotel.findById(req.params.id);
       const list=await Promise.all(hotel.rooms.map(room =>{
        return Room.findById(room);
       }))
   res.status(200).json(list);

    }catch(error){
      next(error);
    }
}