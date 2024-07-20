const mongoose = require("mongoose");
const { adminModel } = require("./adminModel");
const eventSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: adminModel },
  ename: { type: String },
  edate: { type: String },
});
const eventModel = mongoose.model("admin-event", eventSchema);

module.exports = eventModel;
