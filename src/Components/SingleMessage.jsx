import React from 'react'


export default function SingleMessage({message} ,{user}) {
  return (
    
       <div className="container mb-4 ">
        <div className="row justify-content-end me-2" >
          <div className="col-1">
            <img src="https://www.bing.com/th?id=OIP.BmChjBUSITLbvwcQrjR71AHaLH&w=71&h=105&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="rounded-circle" style={{width:"40px", height:"40px",position:"relative",right:"14px" }} alt="Profile" />
          </div>
         
          <div className="col-4 bg-success text-white" style={{borderRadius:"7px"}}>
              
              <p className="mb-0">{message?.message}</p>
              <div className="d-flex">
              <small  className="ms-auto" style={{fontSize:"0.8em"}}>10:30 AM</small>
              </div>
          </div>
        </div>
      </div>
    
  )
}
