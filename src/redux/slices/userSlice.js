import { createSlice } from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name : "userInfo",
    initialState : {
        data : null
    },
    reducers : {
        addUser : (state, action) => {
            state.data = action.payload
        },
        removeUser : (state, action) => {
            state.data = action.payload
        }
    }
})

export const {
    addUser,
    removeUser
} = userInfoSlice.actions

export default userInfoSlice.reducer