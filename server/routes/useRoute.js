const express = require("express");
const router = express.Router();
const {getUsers, addUsers, updateUsers} = require("../controller/userController")


router.get("/all", getUsers);
router.post("/add", addUsers);
router.put("/update/:index", updateUsers);

module.exports = router;