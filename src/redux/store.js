import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
import favReducer from "./slices/favSlice"
import { encryptData } from "../utils/encriypt";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favReducer
    }
})

store.subscribe(() => {

    const cart = store.getState().cart.data
    const fav = store.getState().favorite.data
    console.log(store.getState());

    if (cart.length !== 0) {
        localStorage.setItem("cart", encryptData(cart))
    } else {
        localStorage.removeItem("cart")
    }

    if (fav.length !== 0) {
        localStorage.setItem("fav", encryptData(fav))
    } else {
        localStorage.removeItem("fav")
    }
})

export default store