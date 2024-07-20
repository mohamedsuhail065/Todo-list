import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AXIOS from "axios";
import "../todo/navbar.css";
import Navbar from "../todo/navbar";
import auth from "../context/authentication";
import { useContext } from "react";
export default function Login() {
  const login = useContext(auth); //{status:false,setLogin:setLogin}
  const nav = useNavigate();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const url = "http://localhost:9000/user/login";
    AXIOS.post(url, user)
      .then((res) => {
        const response = res.data;
        if (response.status == 1) {
          alert(response.msg);
          localStorage.setItem("token",response.token)
          login.setLogin(true);
          nav("/userhome");
        } else {
          alert(response.msg);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Navbar />
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Signin</h1>
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

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}
