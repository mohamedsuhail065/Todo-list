const adminModel = require("../model/adminModel");
const eventModel = require("../model/eventModel");

const adminreg = async (req, res) => {
  try {
    const { uname, password } = req.body;
    const user = await adminModel.findOne({ uname });
    if (user) {
      return res
        .status(400)
        .json({ error: "User already exists with that username." });
    } else {
      adminModel.create({
        uname,
        password,
        status: 1,
      });
      res.status(200).json({ message: "Admin registered successfully." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const adminLogin = async (req, res) => {
  try {
    const { uname, password } = req.body;
    const user = await adminModel.findOne({ uname, password });
    if (user) {
      res.json({ status: 1, username: user.uname });
    } else {
      res.json({ status: 0 });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const adminEvent = async (req, res) => {
  try {
    const { ename, edate } = req.body;
    const userid=req.headers.adminid;
    eventModel.create({
      userid,
      ename,
      edate,
    });
    res.status(200).json({ message: "Event added successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { adminreg, adminLogin, adminEvent };
