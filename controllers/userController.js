const userService = require("../services/userService");

const userController = {
  async createUser(req, res) {
    try {
      const userData = req.body;

      const savedUser = await userService.createUser(userData);

      res.status(201).json({
        message: "User created successfully",
        data: savedUser,
      });
    } catch (error) {
      console.error("Error creating user::", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      res.status(201).json({
        message: "",
        data: users,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const updateData = req.body;

      const updatedUser = await userService.updateUser(userId, updateData);

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({
        message: "User updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = userController;
