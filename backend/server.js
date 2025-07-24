import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodrouter from './routes/foodroute.js'


// app config
const app=express()
const port=4000

//db connection
connectDb();

//api endpoints
  app.use("/api/food",foodrouter)
  app.use("/images",express.static('uploads'))

//middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("API Working")

})

app.listen(port,()=>{
    console.log("server is running on port"+port)
})



