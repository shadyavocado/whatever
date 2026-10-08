
import { User } from "../Model/UserModel.js";


export const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check empty fields
        if ( !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check whether email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
        
        // Create new user
        const newUser = await User.create({
            email,
            password
        });
       
        await newUser.save()

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};