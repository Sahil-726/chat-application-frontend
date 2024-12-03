// import React,{useEffect} from 'react'
// import axios from "axios"
// import {useDispatch} from "react-redux"
// import {setOtherUser} from "../Redux/userSlice.js"
// export default function UseGetOtherUser() {
//   //eslint-disable-next-line
//    const dispatch=useDispatch();
   
   
    
//     useEffect(()=>{
//         const fetchOtherUsers=async()=>{
//             try{ 
//                 axios.defaults.withCredentials=true
//                const res=await axios.get("http://localhost:8000/api/v1/user/");
//                console.log(res)
               
//                dispatch(setOtherUser(res.data))
//             }catch(err){
            
//                console.log(err)
//             }
//         }
//         fetchOtherUsers()
//     },[])
//      return null

// }



import {useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
 import { setOtherUser  } from '../Redux/userSlice.js';

const  useGetOtherUser= ()=> {
     const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get('http://localhost:8000/api/v1/user/');
                // console.log(res);

                 dispatch(setOtherUser(res.data))
            } catch (err) {
                console.log(err);
            }
        }

        fetchOtherUsers();
    }, []); // Include dispatch in the dependency array

    
}
export default useGetOtherUser
