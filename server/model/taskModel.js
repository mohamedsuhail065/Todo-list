const mongoose = require("mongoose");
const userModel = require("./userModel");

const todolistSchema = new mongoose.Schema(
  {
    userid:{type:mongoose.Schema.Types.ObjectId,ref:'user-tbl'},
    taskname: { type: String, require },
    Time: { type: String },
    date: {type:String},
  },
  { timestamps: true }
);
const todolistModel = new mongoose.model("task-tbl", todolistSchema);
module.exports = todolistModel;
