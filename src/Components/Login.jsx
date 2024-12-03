import {React,useState} from 'react'
import "../App.css"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import {useDispatch} from "react-redux"
import {setAuthUser} from "../Redux/userSlice.js"
export default function Login() {
     const [user,setUser]=useState({
     
          username:"",
          password:""
          
       })
       const dispatch=useDispatch()
       const navigate=useNavigate()
       const onSubmitHandler= async (e)=>{
             e.preventDefault()
             try{
               const res=await axios.post("http://localhost:8000/api/v1/user/login",user,{
                 headers:{
                   "Content-Type": "application/json"
                 },withCredentials:true
               })
               
                 navigate("/")
            
                 dispatch(setAuthUser(res.data))
               
               
           }catch(error){
            toast.error(error.response.data.message || "An error occured")
          
             console.log(error)
           }
          
             setUser({
          
               username:"",
               password:"",
               
             })
       }
      

  return (
    
       <div className="d-flex justify-content-center align-items-center vh-100">
         <div className=" text-white p-3" id="one">
            <h1 className="text-center pb-4">Login</h1>
            <form onSubmit={onSubmitHandler} action="">
              
             <div className="mb-3">
                  <label className="form-group">Username</label>
                  <input type="text" className="form-control" placeholder="Username"  value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
              
             </div>
              <div className="mb-3">
                  <label className="form-group">Password</label>
                  <input type="password" className="form-control"placeholder="Password"value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
              
              </div>
              <div className="mb-3 text-center">
              <p className="text-dark fw-bolder ">Don't have an account ?<Link to= "/register" className="text-dark fw-bolder">Signup</Link></p>
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
          
         </div>
        
       </div>
      
      
    
  )
}
