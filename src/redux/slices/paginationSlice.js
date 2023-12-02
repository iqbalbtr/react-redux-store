import { createSlice } from "@reduxjs/toolkit"

const paginationSlice = createSlice({
    name: "pagination",
    initialState : {
        data : {
            limit : 12,
            offset : 0,
            status : "default"
        }
    },
    reducers : {
        updateData: (state, action) => {
            state.data[action.payload.key] = action.payload.value
        },
        updateOffset: (state, action) => {
            if(action.payload.value === 1) {
                state.data[action.payload.key] = 0
            } else {
                state.data[action.payload.key] = action.payload.value * state.data.limit
            }
        },
        resetPagination : (state, action) => {
            state.data = {
                ...state.data,
                offset : 0,
                limit : 12
            }
        },
        paginationStatus: (state, action) => {
            state.data = {
                ...state.data,
                status : action.payload
            }
        }
    }
})

export const {
    updateLimit,
    updateOffset,
    resetPagination,
    paginationStatus
} = paginationSlice.actions
export default paginationSlice.reducer