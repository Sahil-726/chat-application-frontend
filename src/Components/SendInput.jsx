import {React,useState} from 'react'
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
export default function SendInput() {
 const [message,setMessage] =useState("")
 const dispatch =useDispatch()
 const {selectedUser} =useSelector(store=>store.user)
 const onSubmitHandler= async (e)=>{
  e.preventDefault()
  try{
      const res= await axios.post(`http://localhost:8000/api/v1/message/send/${selectedUser?._id}`,message,
        {withCredentials:true}
      )
      console.log(res)
  }catch(err){
    console.log(err)
  }
  
 }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
           <div className="p-3 d-inline-flex">
            <input type="text" placeholder="Send message" className="form-control form-control-lg rounded-pill "  
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            id="ten"/>
            <button id="eleven" type="submit" ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
           </div>
      </form>
    </div>
  )
}

