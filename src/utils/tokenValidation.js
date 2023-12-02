import { decryptData } from "./encriypt"

export const tokenValidation = (callback) => {
    const local = localStorage.getItem("token")
    if(local !== null) {
        callback(true, decryptData(local))
    } else {
        callback(false, "Data not found")
    }
}