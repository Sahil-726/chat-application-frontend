import React from 'react'
import "../App.css"
import OtherUser from "./OtherUser.jsx"
import axios from "axios"
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
export default function Sidebar() {
  const navigate=useNavigate()
   const logoutHandler= async (event)=>{
    event.preventDefault()
    try{
       await axios.get("http://localhost:8000/api/v1/user/logout")
       navigate("/login")
       toast.success("Logout successfully")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="border-end " id="four">
      < form action="" >
         <div className="d-inline-flex">
         <input type="text" placeholder="Search..." className="form-control rounded-pill me-2 ms-2 form-control-lg"/>
         <button  type="submit" className=" btn btn-warning" id="six"><i className="fa fa-search"></i></button>
         </div>
      
      <div>
        <OtherUser/>
      </div>
      <div className="mt-3 ms-3">
        <button  onClick={logoutHandler} type="submit" className="btn btn-primary">Logout</button>
      </div>
      </form>
    </div>
  )
}
