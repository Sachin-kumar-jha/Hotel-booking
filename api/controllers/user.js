import User from '../models/user.js'


export const Updateuser = async (req, res, next) => {
    let { id } = req.params;
    try {
        const updaateduser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        return res.status(200).json(updaateduser);
    } catch (error) {
        next(error);
    }
}



export const GetByiduser = async(req,res,next)=>{
    let {id}=req.params;
    try {
        const user=await User.findById(id);
        res.status(202).json(user);
    } catch (error) {
        next(error);
    }
}


export const GetAlluser = async(req,res,next)=>{
    try {
        const allusers=await User.find();
        res.status(202).json(allusers);
    } catch (error) {
        next(error);
    }
}


export const Deleteuser = async(req,res,next)=>{
    let {id}=req.params;
    try {
        const deleteduser=await User.findByIdAndDelete(id);
        res.status(202).json("user has been deleted.");
    } catch (error) {
        next(error);
    }
}