import mongoose from "mongoose";

export const connectDb=async ()=>{
    await mongoose.connect("mongodb+srv://saigajula9549:Saikumar@cluster0.isurtqi.mongodb.net/food-del").then(()=>{
        console.log(" connected to mongodb");
    })
}
