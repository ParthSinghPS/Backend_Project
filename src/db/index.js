import mongoose from "mongoose";
import { db_name } from "../constants.js";


const dbConnect = async () => {
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`) 
        console.log(`\n MONGODB Connected , DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("MONGODB Connection Error: " , error);
        process.exit(1)
    }
}


export default dbConnect