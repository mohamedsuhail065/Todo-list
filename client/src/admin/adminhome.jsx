import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adminevent } from "../redux/counterSlice";
import { useRef } from "react";
const Adminhome = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminevent(data));
  };
  return (
    <div>
      <form>
        <p>
          <input
            type="text"
            name="ename"
            placeholder="Name of the event"
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="date"
            name="edate"
            placeholder="Date of the event"
            onChange={handleChange}
          />
        </p>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Adminhome;
