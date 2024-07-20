import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AXIOS from "axios";
export default function EditTask() {
  const params = useParams();
  const taskid = params.id;
  const refElement = useRef();
  const [task, setTask] = useState({});
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    //{taskname:task1,taskdate:27-6-2024}
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:9000/updateTask`;
    AXIOS.post(url, task, { headers: { taskid: taskid } })
      .then((res) => {
        alert(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    const url = `http://localhost:9000/findbyId/${taskid}`;
    AXIOS.get(url).then((res) => {
      const record = res.data[0];
      console.log(record);
      refElement.current["id"].value = record._id;
      refElement.current["taskname"].value = record.taskname;
      refElement.current["date"].value = record.date;
      refElement.current["Time"].value = record.Time;
    });
  }, []);
  return (
    <>
      <h1>Edit Task</h1>
      <form ref={refElement} onSubmit={handleSubmit}>
        <input type="text" name="id" hidden />
        <input type="text" name="taskname" onChange={handleChange} />
        &nbsp;
        <input type="date" name="date" onChange={handleChange} />
        &nbsp;
        <input type="time" name="Time" onChange={handleChange} />
        &nbsp;
        <button type="submit">Update</button>
      </form>
    </>
  );
}
