import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'

dotenv.config();


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
console.log('Cloudinary Config:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME

});

export default cloudinary;