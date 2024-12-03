import {createSlice} from "@reduxjs/toolkit"
const userSlice= createSlice({
    name:"user",
    initialState:{
        authUser:null,
        selectedUser:null,
        otherUser:null
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser=action.payload
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser=action.payload;
        },
        setOtherUser:(state,action)=>{
            state.otherUser=action.payload;
        }
    }
})

export const {setAuthUser ,setSelectedUser, setOtherUser}=userSlice.actions
export default userSlice.reducer
