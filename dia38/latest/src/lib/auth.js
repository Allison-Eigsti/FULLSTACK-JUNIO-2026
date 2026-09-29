require('dotenv').config()

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "@/models/User";
import connectDB from "@/lib/mongodb";


export async function registerUser({ name, password }) {
    await connectDB();

    // Validate required fields
    if (!name || !password) {
      return {
        success: false,
        status: 400,
        message: "Name and password are required",
      };
    }

    // Check if user exists
    const existingUser = await User.findOne({ name });

    if (existingUser) {
      return {
        success: false,
        status: 409,
        message: "A user with this name already exists",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name: name,
      password: hashedPassword
    });


    return {
      success: true,
      status: 201,
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.name
      }
  }
}



async function loginUser(req) {
    const { name, password } = req.body

    try {
        await connectDB()

        // Validate required fields
        if (!name || !password) {
        return {
            success: false,
            status: 400,
            message: "Name and password are required",
        };
        }

        const user = await User.findOne({ name })

        if (!user) {
            return {
                success: false,
                status: 401,
                message: "Invalid email or password",
            };
        }
        
        // authenticate user
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
                  return {
                    success: false,
                    status: 401,
                    message: "Invalid email or password",
                };
        }

        // authorize and serialize w jwt (Create jwt for session)
        // send jwt back to client browser
        const token = jwt.sign({ id: user._id.toString(), name: user.name }, process.env.JWT_SECRET)
            return {
                success: true,
                status: 200,
                message: "Login successful",
                token,
                user: {
                    id: user._id.toString(),
                    username: user.username,
                    email: user.email,
                }
            }
    } catch(err) {
    console.error("Login error:", error);

    return {
      success: false,
      status: 500,
      message: "Something went wrong while logging in",
    }}
}

