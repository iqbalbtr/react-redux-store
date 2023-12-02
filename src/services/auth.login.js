import axios from "axios"

export const getLogin = async (data, callback) => {
    await axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
        .then(res => {
            callback(true, res.data)
        })
        .catch(error => {
            callback(false, error)
        })
}