import User from "../model/user.model.js";
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedIdUserId = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedIdUserId } }). select("-password");

    res.status(200).json(filteredUsers);

  } catch (error) {
    console.error("Error in getUsersForSidebar:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
