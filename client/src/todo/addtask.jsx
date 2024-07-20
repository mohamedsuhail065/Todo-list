import '../todo/navbar.css'
import { useState } from "react"
import AXIOS from 'axios';
import { jwtDecode } from 'jwt-decode';
export default function AddTask(){
    const [task,setTask]=useState({});
    const user=jwtDecode(localStorage.getItem('token'))
    const header={
        token:localStorage.getItem('token'),
        userid:user.data[0]._id
    }
    const handleChange=(e)=>{
         setTask({...task,[e.target.name]:e.target.value})
         //{taskname:task1,taskdate:27-6-2024}
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const url="http://localhost:9000/addTask";
        AXIOS.post(url,task,{headers:header})
        .then((res)=>{
            console.log(res)
          alert(res.data)
        })  
        console.log(task)
    }
    return(
        <>
        <div className='contain'>
        <h1>Add Task</h1>
        <form method="post" onSubmit={handleSubmit}>
           <input 
           type="text"
           name="taskname" 
           placeholder="Task name" 
           onChange={handleChange}
           required/>
           <input 
            type="date"
            name="date"
            onChange={handleChange}
            required
            />
            <input 
              type="time"
              name="Time"
              onChange={handleChange}
              required
              />
              <button 
                type="submit"
                >
                    Create
                </button>
        </form>
        </div>
        </>
    )
}