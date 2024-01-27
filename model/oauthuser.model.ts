import mongoose from "mongoose";


const oauthuserSchema = new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        require:true
    },
    avator:{
        type:String,
    },
    username:{
        type:String,
        require:true,
        lowercase:true,
        unique:true
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


export const OauthModel = mongoose.model("Oauth",oauthuserSchema)