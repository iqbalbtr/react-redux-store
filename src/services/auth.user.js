import axios from "axios"


export const getUserInfo = async (req, callback) => {
    try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", req)
        const user = await res.data
        
        if (user) {
            callback(true, user)
        } 
    } catch (error) {
        callback(false, null)
        console.error(error.message);
    }
}