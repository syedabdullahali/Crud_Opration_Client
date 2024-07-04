const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const userModel = mongoose.model("user-account", userSchema);
module.exports = userModel;
