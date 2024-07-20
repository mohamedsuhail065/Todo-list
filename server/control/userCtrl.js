const main = require("../model/dbConnect");
main().catch((err) => console.log(err));
const bcrypt = require("bcrypt");
const salt = 10;
const { userModel, profileModel } = require("../model/userModel");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  // const user=new userModel(req.body)
  // user.save()
  const { fullname, email, password, mobile } = req.body;
  const record = await userModel.find({ email });
  if (record.length > 0) {
    res.json("Email already existing");
    res.end();
  } else {
    bcrypt.hash(password, salt, function (err, hashpassword) {
      userModel.create({
        fullname,
        email,
        password: hashpassword,
        mobile,
      });
      res.json("registered");
      res.end();
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const record = await userModel.find({ email });
  if (record.length > 0) {
    const hashpassword = record[0].password;
    bcrypt.compare(password, hashpassword, function (err, result) {
      if (err) {
        console.log(err);
        res.json("Error");
      } else if (result) {
        const token = jwt.sign({ data: record }, "todo", { expiresIn: "1hr" });
        res.json({
          status: 1,
          msg: "Login Success",
          userid: record[0]._id,
          username: record[0].fullname,
          token: token,
        });
      } else {
        res.json({ status: 0, msg: "Password Incorrect" });
      }
    });
  } else {
    res.json({ status: 0, msg: "Incorrect Email" });
  }
};

const uploadImage = (req, res) => {
  profileModel.create({
    userid: req.headers.userid,
    image: req.file.filename,
    imgname: req.body.imgname,
  });
  res.json("Uploaded Successfully");
};

const profileUser = async (req, res) => {
  const userid = req.headers.userid;
  record = await profileModel.find({ userid: userid });
  if (record.length > 0) {
    res.json({ record: record });
  } else {
    res.json({ record: [] });
  }
};

module.exports = { register, login, uploadImage,profileUser };
