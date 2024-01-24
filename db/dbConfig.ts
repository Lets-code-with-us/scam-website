import mongoose from "mongoose";
import ApiError from "@/util/apiError";

// connect db
const dbConnect = async()=>{
    try {
       const dataBase =  await  mongoose.connect("")
        console.log(dataBase.connection)
        
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
        
    }

}

export default dbConnect