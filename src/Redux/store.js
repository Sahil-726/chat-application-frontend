import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice.js"
import messageReducer from "./messageSlice.js"

const store=configureStore({
    reducer:{
      user:userSlice,
      message:messageReducer
    }
})

export default store
