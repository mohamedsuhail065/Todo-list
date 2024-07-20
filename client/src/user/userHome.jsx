import { Route, Routes, useNavigate } from "react-router-dom";
import UserNavbar from "./usernav";
import TodoList from "../todo/todo";
import AddTask from "../todo/addtask";
import auth from "../context/authentication";
import { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import ProfileUpload from "./ProfileUpload";
import AXIOS from 'axios'
export default function UserHome() {
  const user=jwtDecode(localStorage.getItem("token"))
  console.log(user.data)
  const [record,setRecord]=useState([])
  const login = useContext(auth);
  const username = sessionStorage.getItem("username");
  const nav = useNavigate();
  useEffect(()=>{
    AXIOS.get("http://localhost:9000/user/viewprofile",{headers:{
      userid:user.data[0]._id,
    }}).then((res)=>{
      console.log(res.data)
      setRecord(res.data.record)
    })
  })
  // useEffect(() => {
  //   !login.status ? nav("/login") : "";
  // }, []);
  return (
    <>
      <UserNavbar />
      <div>
      {record.length > 0 ?
          record.map((item, index) => (
            <p key={index}>
              <img src={`http://localhost:9000/${item.image}`} height={80} width={80} />
              <h4>{item.imgname}</h4>
            </p>
          ))
          : <p>No profile images found.</p>
        }
      </div>

      <h1>{user.data[0].fullname}</h1>
      <Routes>
        <Route path="/todo" element={<TodoList />}></Route>
        <Route path="/addtask" element={<AddTask />}></Route>
        <Route path="/upload" element={<ProfileUpload/>}/>
      </Routes>
    </>
  );
}
