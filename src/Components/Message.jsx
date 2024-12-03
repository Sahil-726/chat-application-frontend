import React from 'react'
import SingleMessage from "./SingleMessage.jsx"
import UseGetMessage from "../hooks/UseGetMessage.jsx"
import {useSelector} from "react-redux"
const Message=()=> {
  UseGetMessage()
  const {messages}=useSelector(store=>store.message)
  if(!messages){
    return <div>No message available</div>
  }
   
  let me= messages.message
   //console.log(messages.message)
  return (
    <div className="d-flex flex-column" style={{height:"430px"}}>
      <div className="mt-auto">
       
         {
           me?.map((message)=>{
          return(
               <SingleMessage key={message._id} message={message}/>
             )
           })
         } 
      
      </div>
    </div>
    
  )
}
export default Message

