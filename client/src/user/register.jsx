import { useState } from "react";
import AXIOS from "axios";
import "../todo/navbar.css";
import Navbar from "../todo/navbar";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [user, setUser] = useState({});
  const nav = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const url = "http://localhost:9000/user/register";
    AXIOS.post(url, user)
      .then((res) => {
        alert(res.data);
        nav("/login");
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Navbar />

      <form method="post" onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Signup</h1>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
          <button type="submit">Create Account</button>
        </div>
      </form>
    </>
  );
}
