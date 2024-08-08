import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generatePathToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15d" }
  );
};

const findUserByEmail = async (email, role) => {
  if (role === "patient") {
    return await User.findOne({ email });
  } else if (role === "doctor") {
    return await Doctor.findOne({ email });
  }
  return null;
};

const createUser = async (userData, role) => {
  if (role === "patient") {
    return new User(userData);
  } else if (role === "doctor") {
    return new Doctor(userData);
  }
  return null;
};

export const signup = async (req, res) => {
  const { email, password, photo, gender, role, name } = req.body;

  console.log("Received signup request:", { email, role });

  try {
    const existingUser = await findUserByEmail(email, role);

    if (existingUser) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    console.log("Hashing password");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Creating new user");
    const user = await createUser(
      { email, password: hashedPassword, photo, gender, role, name },
      role
    );

    console.log("Saving user to database");
    await user.save();

    res.status(200).json({ success: true, message: "User successfully created" });
  } catch (err) {
    console.error("Signup Error: ", err.message, err.stack);
    res.status(500).json({
      success: false,
      message: "Internal Server Error, please try again",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email, "patient") || await findUserByEmail(email, "doctor");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ status: false, message: "Invalid credentials" });
    }

    const token = generatePathToken(user);

    const { password: userPassword, ...userData } = user._doc;
    res.status(200).json({
      status: true,
      message: "Successfully logged in",
      token,
      data: userData,
    });
  } catch (err) {
    console.error("Login Error: ", err.message, err.stack);
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
