import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../redux/counterSlice";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState({});
  const adminstatus = useSelector((state) => state.admincounter.adminLogin);
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (dispatch(adminLogin(admin))) {
    }
  };
  return (
    <div>
      <h1>Admin Login</h1>
      <p>
        <input
          type="text"
          name="uname"
          placeholder="Username"
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </p>
      {adminstatus ? "Login Success" : "Login Failed"}
    </div>
  );
}
