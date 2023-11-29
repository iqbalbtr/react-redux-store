import { legacy_createStore } from "redux";

// Fungsi reducer yang akan mengelola pembaruan status berdasarkan aksi
const reducer = (
    state = {
        cart : []
    },
    action
) => {
    switch (action.type) {
        case "ADD_CART" :
            return {
                ...state,
                cart : [...state.cart, action.payload]
            }
        default :
        return state
    }
}

// Membuat toko Redux dengan menggunakan fungsi createStore
const store = createStore(reducer);
console.log(store.getState())

export default store;