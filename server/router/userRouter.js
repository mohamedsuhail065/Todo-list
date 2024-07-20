const express = require("express");
multer = require("multer");
// const upload=multer({dest:'uploads/'})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const {
  register,
  login,
  uploadImage,
  profileUser,
} = require("../control/userCtrl");
const userRouter = express.Router();
userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
userRouter.route("/uploadimage").post(upload.single("image"), uploadImage);
userRouter.route("/viewprofile").get(profileUser);

module.exports = userRouter;
