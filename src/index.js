// require('dotenv').config({path: './env'})


import dotenv from "dotenv"
import dbConnect from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: './env'
})
dbConnect()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at Port: ${process.env.PORT}`);
        
    })
})
.catch( (err) => {
    console.log("MONGODB Connection Failed:" , err);
    
})

/*
import express from "express"
const app = express()
;( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`) 
        app.on("error" , (error) => {
            console.log("error:" , error);
            throw error

            app.listen(process.env.PORT , () => {
                console.log(`App is listening on ${process.env.PORT}`);
                
            })
            
        })

    } catch (error) {
        console.error("ERROR: " , error);
        throw error
    }
})() 
    */