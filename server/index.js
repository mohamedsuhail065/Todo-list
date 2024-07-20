const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const taskRouter = require("./router/taskRouter");
app.use("/", taskRouter);
const userRouter = require("./router/userRouter");
app.use("/user", userRouter);
const adminrouter = require("./router/adminRouter");
app.use("/admin", adminrouter);
app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
