import mongoose from "mongoose";

const {Schema} = mongoose

const useSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true})

/* timestamps => createdAt ve updatedAt oluşturuyor */

export default mongoose.models.User || mongoose.model("User", useSchema)