import React from 'react'
import SendInput from "./SendInput.jsx"
import Message from "./Message.jsx"
import {useSelector} from "react-redux"
export default function MessageContainer() {
  const {selectedUser} = useSelector(store=>store.user)
  // console.log(selectedUser)
  return (
    <div  id="nine">
      <div className=" mt-2 bg-info" style={{borderRadius:"10px"}} >

        <div className="d-flex align-items-center" >

          <div className="d-flex align-items-center mb-2">
            <div className="bg-light rounded-circle d-inline-block" style={{ width: "10px", height: "10px", position: "relative", bottom: "7px", left: "6px", zIndex: "1" }}></div>
            <div className=" rounded-circle" style={{ width: "40px", height: "40px", overflow: "hidden", position: "relative", top: "4px" }}>
              <img src={selectedUser?.profilePhoto} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="profile" />
            </div>
          </div>



          <div className="ms-3 ">
            <p className=" fw-bolder text-uppercase mb-0">{selectedUser?.fullname}</p>
          </div>



        </div>
      </div>
      <div className="mt-2 overflow-auto  " style={{height:"430px"}}>
       <Message/>
       
      
      </div>
      <div>
      <SendInput/>
      </div>
    </div>
  )
}
