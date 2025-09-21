const UserInfo = require("../models/UserInfo");
const { v4: uuidv4 } = require("uuid");

const userService = {
  async createUser(userData) {
    try {
      const userId = uuidv4();

      const newUser = new UserInfo({
        id: userId,
        ...userData,
      });

      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw error;
    }
  },

  async getUsers() {
    const users = await UserInfo.find();
    return users;
  },

  async updateUser(userId, updateData) {
    try {
      const updatedUser = await UserInfo.findOneAndUpdate(
        { id: userId },
        { $set: updateData },
        { new: true }
      );
      return updatedUser;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userService;
