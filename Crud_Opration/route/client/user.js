const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../model/client/user-account");

//signup
router.post("/user-signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.send({
      success: false,
      msg: "Incomplete data in req.body. Name, email, password are mandatory",
    });
  }

  const isUserExist = await userAccount.find({ email: email });

  if (isUserExist) {
    return res.send({ success: false, msg: "User already exist" });
  }

  //if user not found
  try {
    const newUser = await User.create(req.body);
    if (!newUser) {
      return res.send({ success: false, msg: "Cannot create user" });
    }
    return res.send({ succes: true, msg: "User account created successfully" });
  } catch (err) {
    return res.send({ success: false, msg: `error : ${err.message}` });
  }
});

//login
router.post("/user-login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send({
      success: false,
      msg: "Incomplete data in req.body. Email and password are mandatory",
    });
  }

  try {
    const isUser = await User.find({ email: email });
    if (!isUser) {
      return res.send({ success: false, msg: "User not found" });
    }
    if (isUser.password !== password) {
      return res.send({ success: false, msg: "incorrect password" });
    }

    const token = jwt.sign({ _id: isUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.send({
      success: true,
      msg: "User logged in successfully",
      token: token,
    });
  } catch (err) {
    return res.send({ success: false, msg: `error : ${err.message}` });
  }
});

module.exports = router;
