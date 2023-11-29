import toolkit from '@reduxjs/toolkit'

const {configureStore, createAction, createReducer} = toolkit

const addCart = createAction("ADD_TO_CART")
const login = createAction("SESSION")

// const initialState = {
//     cart : []
// }

const cartReducer = createReducer({cart : []}, (builder) => {
    builder.addCase(addCart, (state,action) => {
        state.cart.push(action.payload)
    })
})

const loginReducer = createReducer({status : false}, (builder) => {
    builder.addCase(login, (state,action) => {
        state.status = true
    })
})

const store = configureStore({
    reducer : {
        cart : cartReducer,
        login : loginReducer
    }
})

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addCart({id: 1, qty: 8}))
store.dispatch(login())