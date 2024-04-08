import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "HOSPITAL_MANAGEMENT"
    }).then(()=>{
        console.log("Connected to dataBase!")
    }).catch(err=>{
        console.log(`Some error occued while connecting dataBase: ${err}`)
    })
};