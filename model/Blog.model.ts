import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({

    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        require:true,
        lowercase:true
    },
    coverimage:{
        type:String,
        require:true,

    },
    content:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true,
        lowercase:true
    }



})


export const Blog =  mongoose.models.blogs   || mongoose.model("Blog",BlogSchema)