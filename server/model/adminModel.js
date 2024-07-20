const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  uname: { type: String },
  password: { type: String },
  status: { type: String, default: "0" },
});

const adminModel = mongoose.model("admin-tbl", adminSchema);

module.exports = { adminModel };
