import { Routes, Route } from "react-router-dom";
import Homepage from "./todo/home";
// import TodoList from "./todo/todo"
// import AddTask from "./todo/addtask"
import EditTask from "./todo/editTask";
import Register from "./user/register";
import Login from "./user/login";
import UserHome from "./user/userHome";
import auth from "./context/authentication";
import { useState } from "react";
import AdminReg from "./admin/adminReg";
import AdminLogin from "./admin/adminlogin";
import Adminhome from "./admin/adminhome";
import ProfileUpload from "./user/ProfileUpload";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <>
      <auth.Provider value={{ status: isLogin, setLogin: setLogin }}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* <Route path="/todolist" element={<TodoList/>}></Route> */}
          {/* <Route path="/addtask" element={<AddTask/>}></Route> */}
          <Route path="/editTask/:id" element={<EditTask />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/userhome/*" element={<UserHome />}></Route>
          <Route path="/upload" element={<ProfileUpload/>}/>
          <Route path="/adminreg" element={<AdminReg/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path='/adminhome' element={<Adminhome/>}/>
        </Routes>
      </auth.Provider>
    </>
  );
}

export default App;
