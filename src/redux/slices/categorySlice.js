import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "category",
    initialState: {
        data: {
            id: 0,
            name: "Default",
            image: "/"
        }
    },
    reducers: {
        changeCategeory: (state, action) => {
            state.data = {
                id: action.payload.id,
                name: action.payload.name,
                image: action.payload.image,
            }
        }
    }
})

export const {
    changeCategeory
} = categorySlice.actions

export default categorySlice.reducer

