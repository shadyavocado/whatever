import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,

            trim: true
        },

        email: {
            type: String,
            required: true,
         
            trim: true,
            lowercase: true
        },
        subject: {
            type: String,
            trim: true
        },
        message: {
            type: String,
            required: true
        },

    }
)
export const Contact = mongoose.model("Contact", ContactSchema);