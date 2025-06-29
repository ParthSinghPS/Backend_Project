import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from "fs"



// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_NAME,
    api_secret: process.env.CLOUDINARY_API_KEY 
})  


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto'
        })
        //file is uploaded
        //console.log("file is uploaded successfully" , response.url);
        fs.unlinkSync(localFilePath)
        return response
            
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        //removes the locally saved temporary file as the upload operation got failed
        return null;
    }
}


export {uploadOnCloudinary}