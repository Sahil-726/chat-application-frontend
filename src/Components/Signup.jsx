import {React,useState} from 'react'
import "../App.css"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
export default function Signup() {
  const [user,setUser]=useState({
     fullname:"",
     username:"",
     password:"",
     confirmPassword:"",
     gender:""
  })
  const navigate=useNavigate()
  const onSubmitHandler= async (e)=>{
        e.preventDefault()
        try{
            const res=await axios.post("http://localhost:8000/api/v1/user/register",user,{
              headers:{
                "Content-Type": "application/json"
              },withCredentials:true
            })
            if(res.data.success){
              navigate("/login")
              toast.success(res.data.message)
            }
            
        }catch(error){
          
          toast.error(error.response.data.message || "An error occured")
          
          console.log(error)
        }
        setUser({
          fullname:"",
          username:"",
          password:"",
          confirmPassword:"",
          gender:""
        })
  }
  const handleCheckbox=(gender)=>{
    setUser({...user,gender:gender})
  }
  return (
    
       <div className="d-flex justify-content-center align-items-center vh-100">
         <div className=" text-white p-3" id="one">
            <h1 className="text-center pb-4">Signup</h1>
            <form onSubmit={onSubmitHandler} action="">
              <div className="mb-3">
                  <label className="form-group">Full Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" value={user.fullname} onChange={(e)=>setUser({...user,fullname:e.target.value})} />
              
             </div>
             <div className="mb-3">
                  <label className="form-group">Username</label>
                  <input type="text" className="form-control" placeholder="Username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
              
             </div>
              <div className="mb-3">
                  <label className="form-group">Password</label>
                  <input type="password" className="form-control" placeholder="Password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
              
              </div>
              <div className="mb-3">
                  <label  className="form-group">Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Confirm Password" value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}/>
              </div>
              <div className="mb-2">
                <label className="form-group">Gender</label>
                <div>
                   <div className="form-check form-check-inline">
                       <input type="radio" className="form-check-input "id="two" name="gender" checked={user.gender==="Male"} onChange={()=>handleCheckbox("male")}/>
                        <label htmlFor="two" className="form-check-label">Male</label>
                   </div>
                   <div className="form-check form-check-inline">
                       <input type="radio" className="form-check-input" id="three" name="gender"  checked={user.gender==="Female"} onChange={()=>handleCheckbox("female")}/>
                       <label htmlFor="three" className="label-check-input">Female</label>
                   </div>
                </div>
              </div>
              <div className="mb-3 text-center">
              <p className="text-dark fw-bolder">Already have an account ?<Link to= "/login" className="text-dark fw-bolder">Login</Link></p>
              </div>
              <button type="submit" className="btn btn-primary w-100">Signup</button>
              </form>
          
         </div>
        
       </div>
      
      
    
  )
}
