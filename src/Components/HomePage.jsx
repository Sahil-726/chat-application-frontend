import React from "react"
import Sidebar from "./Sidebar.jsx"
import MessageContainer from "./MessageContainer.jsx"
export default function HomePage(){
    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Sidebar/>
          <MessageContainer/>
        </div>
    )
}
