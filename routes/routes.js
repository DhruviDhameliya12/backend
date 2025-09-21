const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/employee", userController.createUser);
router.get("/employee", userController.getUsers);
router.patch("/employee/:id", userController.updateUser);

module.exports = router;
