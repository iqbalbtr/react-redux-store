import axios from "axios"

export const getLogin = async (data, callback) => {
    await axios.post('https://fakestoreapi.com/auth/login', data)
        .then(res => {
            callback(true, res.data)
        })
        .catch(error => {
            callback(false, error)
        })
}