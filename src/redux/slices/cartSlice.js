import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existing = state.data.find(data => data.id === action.payload.id)
            if (existing) {
                existing.qty++
            } else {
                state.data.push(action.payload)
            }
        },
        deleteCart: (state, action) => {
            const existing = state.data.find(data => data.id === action.payload.id)
            if (existing) {
                if (existing.qty === 1) {
                    state.data = state.data.filter(data => data.id !== action.payload.id)
                } else {
                    existing.qty--
                }
            }
        },
        addFromLocal: (state, action) => {
            return {
                ...state, 
                data : action.payload
            }
        },
        removeItem : (state,action) => {
            state.data = state.data.filter(data => data.id !== action.payload) 
        }
    }
})
    

export const { addToCart, deleteCart, addFromLocal, removeItem } = cartSlice.actions
export default cartSlice.reducer