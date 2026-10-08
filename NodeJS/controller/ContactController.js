
import { Contact } from "../Model/ContactModel.js";


export const createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Check empty fields
        if ( !name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check whether email already exists
        // const existingUser = await Contact.findOne({ email });

        // if (existingUser) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "User already exists"
        //     });
        // }
        
        // Create new user
        const newContact = await Contact.create({
            name, 
            email,
            subject,
            message
        });
       
        await newContact.save()

        return res.status(201).json({
            success: true,
            message: "contact registered successfully",
            data: newContact
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};