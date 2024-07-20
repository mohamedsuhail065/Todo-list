const express = require("express");
const adminrouter = express.Router();
const { adminreg, adminLogin, adminEvent } = require("../control/adminCtrl");

adminrouter.route("/register").post(adminreg);
adminrouter.route("/login").post(adminLogin);
adminrouter.route("/event").post(adminEvent);

module.exports = adminrouter;
