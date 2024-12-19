import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/userModel.js";


export const registerUser = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      username,
      password: hashPassword,
    });
    res.status(201).json({ success: true, message: "Account created successfully" });

  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// login
export const loginUser = async (req, res) => {
  const secret = process.env.JWT_SEC;
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      secret,
      { expiresIn: "1h" } // Optional: Token expiration
    );

    // Send success response with token and user ID
    res
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        token,
        userId: user._id,
      });
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred",
        error: error.message,
      });
  }
};

export const getUserDetails = async(req,res) => {
  let {userId} = req.body;
  let user = await User.findOne({_id: userId});

  if(user){
    return res.json({success: true, message: "User Details Fetched", user});
  }
  else{
    return res.json({success: false, message: "User not found"});
  }
}
