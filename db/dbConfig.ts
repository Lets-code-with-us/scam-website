import mongoose from "mongoose";
// import ApiError from "@/util/apiError";


// connect db
export async function dbConnect(){
    try {
        await mongoose.connect(`${process.env.MONGO_URI!}/${process.env.DBNAME}`)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('database connected')

        })
        
        
		connection.on('error',(err)=>{
            console.log("connection error: ",err)
            process.exit();
		})
        
        
    } 
    catch (error) {
        console.log("dataBase error: ",error)
        process.exit()
        
        
    }

}

