import { createSlice } from "@reduxjs/toolkit";


const favSlice = createSlice({
    name: "favorite",
    initialState: {
        data: []
    },
    reducers: {
        addFavItem: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        removeFavItem: (state, action) => {
            state.data = state.data.filter(data => data.id !== action.payload.id)
        },
        addFromLocalFav: (state, action) => {
            return {
                ...state,
                data: action.payload
            }
        }
    }
})

export const {
    addFavItem,
    removeFavItem,
    addFromLocalFav
} = favSlice.actions

export default favSlice.reducer