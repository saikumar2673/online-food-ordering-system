import mongoose from "mongoose";

const foodschema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},    
})

const Foodmodel =mongoose.models.food || mongoose.model("food",foodschema);

export default Foodmodel;