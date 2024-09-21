import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose' 
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";
const app=express();
app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use(cookieParser());

dotenv.config()
const connect=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_TOKEN}`);
         console.log("connected")
    }catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDb disconnected");
});
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
})


app.use("/api/auth",authRoute);
app.use("/api/hotel",hotelRoute);
app.use("/api/rooms",roomRoute);
app.use("/api/users",userRoute);


app.listen(3000,()=>{
    connect()
    console.log("connected to backend + http://localhost:3000")
})