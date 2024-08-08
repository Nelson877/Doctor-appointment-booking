import User from "../models/UserSchema.js";

// Updating the user
export const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated user",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Failed to update user", 
      error: error.message 
    });
  }
};

// Deleting a user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted user",
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Failed to delete user", 
      error: error.message 
    });
  }
};

// Getting a single user
export const getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select('-password'); // the selected password is hidden by default 
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully found the user",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Failed to retrieve user", 
      error: error.message 
    });
  }
};

// Getting all users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password"); // the selected password is hidden by default
    res.status(200).json({
      success: true,
      message: "Successfully found users",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Failed to retrieve users", 
      error: error.message 
    });
  }
};
