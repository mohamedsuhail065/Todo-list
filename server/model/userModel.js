const mongoose = require("mongoose");

// Schema for user
const userSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    mobile: { type: String },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user-tbl", userSchema);

//Schema for profile
const profileSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'user-tbl' },
  image: { type: String },
  imgname: { type: String },
});

const profileModel = mongoose.model("profile-tbl", profileSchema);

module.exports = {  profileModel,userModel };
