import AXIOS from "axios";
import "../todo/navbar.css";
import { useState, useEffect, useContext } from "react";
import auth from "../context/authentication";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export default function TodoList() {
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  const nav = useNavigate();
  const user = jwtDecode(localStorage.getItem("token"));
  const header = {
    token: localStorage.getItem("token"),
    userid: user.data[0]._id,
  };
  useEffect(() => {
    const url = "http://localhost:9000/fetchTask";
    AXIOS.get(url, { headers: header })
      .then((res) => {
        if (res.data.status == 0) {
          setMsg(res.data.msg);
          nav("/");
        }
        if (res.data.status == 1) {
          setRecord(res.data.record);
        } else if (res.data.status == 2) {
          setMsg("No Data");
        }
      })
      .catch((err) => console.log(err));
  }, [record]);

  const taskDelete = (id) => {
    const url = `http://localhost:9000/deleteTask/${id}`;
    AXIOS.delete(url)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>TodoList</h1>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search by taskname"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <div className="wrapper">
        <div className="item">
          <table border={1}>
            <tr>
              <th>Taskname</th>
              <th>Time</th>
              <th>Date</th>
              <th colSpan={2}>Action</th>
            </tr>

            {record.length > 0 &&
              record
                .filter((ls) => {
                  return ls.taskname.toLowerCase().match(search.toLowerCase());
                })
                .map((items, index) => {
                  return (
                    <tr>
                      <td>{items.taskname}</td>
                      <td>{items.Time}</td>
                      <td>{items.date}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => {
                            taskDelete(items._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <a href={`./editTask/${items._id}`}>
                          <button type="button">Edit</button>
                        </a>
                      </td>
                    </tr>
                  );
                })}
          </table>
        </div>
      </div>
      {msg}
    </>
  );
}
