const main = require("../model/dbConnect");
const todolistModel = require("../model/taskModel");
main().catch((err) => console.log(err));

const Addtask = async (req, res) => {
  try {
    const { taskname, Time, date } = req.body;
    const userid = req.headers.userid;
    todolistModel.create({
      userid,
      taskname,
      Time,
      date,
    });
    res.send("Registered Sucessfully");
  } catch (err) {
    console.log(err);
  }
};

const fetchTask = async (req, res) => {
  const record = await todolistModel
    .find({ userid: req.headers.userid })
    .populate("userid");
    if(record.length>0){
      res.json({status:1,record:record})
  }
  else{
      res.json({status:2,record:[]})
  }
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  await todolistModel.deleteOne({ _id: id });
  res.json("Task is deleted");
  res.end();
};
const findbyId = async (req, res) => {
  const record = await todolistModel.find({ _id: req.params.id });
  if (record.length > 0) {
    res.json(record);
  } else {
    res.json([]);
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.headers.taskid;
    console.log(id);
    const { taskname, Time, date } = req.body;
    await todolistModel.updateOne({ _id: id }, req.body);
    res.json("data updated");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { fetchTask, Addtask, deleteTask, findbyId, updateTask };
