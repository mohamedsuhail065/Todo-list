import Navbar from "./navbar";
import '../todo/navbar.css'
import gif from '../assets/home.gif'
export default function Homepage(){
    return(
<>
<Navbar/>
<div className="container">
                <h1>Welcome to Your To-Do List</h1>
                <p>Stay organized and manage your tasks efficiently!</p>
                <img src={gif}/>
            </div>
</>

    )
}