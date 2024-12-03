import React from 'react';
import User from "./User.jsx";
import useGetOtherUser from "../hooks/UseGetOtherUser.jsx"
import {useSelector} from "react-redux"
const  OtherUser= ()=> {
    useGetOtherUser()
    const {otherUser}=useSelector(store=>store.user)
    if(!otherUser)return;
    

    return (
        <div className="overflow-auto" id="eight">
        {
          otherUser?.map((user)=>{
            return(
              <User key={user._id} user={user}/>
            )
          })
        }
        </div>
    );
}
export default OtherUser
