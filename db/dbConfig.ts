import mongoose from "mongoose";
// import ApiError from "@/util/apiError";


// connect db
export async function dbConnect(){
    try {
        mongoose.connect('mongodb+srv://admin:admin@testdb.9lk9o4r.mongodb.net')
        const connection = mongoose.connection;
        connection.on('connected',()=>{
        })
        
        
		connection.on('error',(err)=>{
            console.log(err)
            process.exit();
		})
        
        console.log('database connected')
        
    } 
    catch (error) {
        console.log(error)
        process.exit()
        
        
    }

}

