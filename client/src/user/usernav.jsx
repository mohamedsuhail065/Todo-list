import "../todo/navbar.css";
import { useNavigate } from "react-router-dom";
export default function UserNavbar() {
  const nav = useNavigate();
  return (
    <>
      <div className="nav">
        <a href="/userhome">Home</a>
        <a href="/userhome/addtask">Add Tasks</a>
        <a href="/userhome/todo">Todo List</a>
        <a href="/userhome/upload">Upload Image</a>
        <a href="/">Logout</a>
      </div>
    </>
  );
}
