import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const newLetterSchema = new mongoose.Schema({
    users: [{
        type: emailSchema
    }]
});

const Subscriber = mongoose.model("Subscriber", newLetterSchema);

export default Subscriber;
