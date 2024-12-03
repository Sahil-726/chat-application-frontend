import React from "react"
import {useDispatch,useSelector} from "react-redux"
import {setSelectedUser} from "../Redux/userSlice.js"

export default function User({user}){
   const dispatch =useDispatch()
   const {selectedUser} =useSelector(store=>store.user)
   const selectUserHandler=(user)=>{
      
      dispatch(setSelectedUser(user))
   }

    return (
     <>
        <div onClick={()=>selectUserHandler(user)}className="p-2 mt-2">
            
            <div className="d-flex align-items-center" id="seven" style={{ backgroundColor :`${selectedUser?._id===user?._id ?"lavender":""}`,borderRadius:"10px"}}>
               
               <div className="d-flex align-items-center mb-2">
                  <div className="bg-light rounded-circle d-inline-block" style={{width:"10px", height:"10px" ,position:"relative" , bottom:"7px" ,left:"6px" ,zIndex:"1"}}></div>
                  <div className=" rounded-circle" style={{width:"40px", height:"40px", overflow:"hidden", position:"relative", top:"4px"}}>
                    <img src={user?.profilePhoto}  style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="profile"/ >
                  </div>
               </div>
         
               
               
                 <div className="ms-3 ">
                    <p className=" text-uppercase mb-0" style={{fontweight:"500px"}}>{user?.fullname}</p>
                 </div>
               
   
            
         </div>
         </div>
     </>
     )
}
