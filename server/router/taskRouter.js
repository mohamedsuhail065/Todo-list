const express = require("express");
const router = express.Router();
const {
  fetchTask,
  Addtask,
  deleteTask,
  findbyId,
  updateTask,
} = require("../control/taskCtrl");
const tokenVerification = require("../utils/tokenverification");
router.route("/addTask").post(Addtask);
router.route("/fetchTask").get(tokenVerification, fetchTask);
router.route("/deleteTask/:id").delete(deleteTask);
router.route("/findbyId/:id").get(findbyId);
router.route("/updateTask").post(updateTask);

module.exports = router;
