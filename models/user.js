const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  cart: { type: Array, default: [] }, // Default empty array for cart
  address: { type: String, default: "" }, // Default empty string for address
});

module.exports = mongoose.model("User", userSchema);
