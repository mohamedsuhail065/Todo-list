import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminreg } from "../redux/counterSlice";
export default function AdminReg() {
  const [admin, setAdmin] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admin);
    dispatch(adminreg(admin));
  };
  return (
    <div>
      <h1>Admin</h1>
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
          Register
        </button>
      </p>
    </div>
  );
}
