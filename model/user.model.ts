import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        require:true,
        lowercase:true,
        unique:true
    },

    pasword:{
        type:String,
        require:true
    },

    avator:{
        type:String,
        require:true
    },
    
    Blogs:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Blog"
        }
    ],


Bio:{
    type:String,
    lowercase:true
},

instagram:{
    type:String
},

linkdln:{
    type:String
},
twitter:{
    type:String
}
    
    


})


export const User = mongoose.model('User',userSchema) 