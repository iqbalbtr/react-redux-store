import Input from "../element/input"
import Button from "../element/button"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { getLogin } from "../../services/auth.login"

const LoginForm = () => {

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token !== null) {
            window.location.href = "/"
        } 
    }, [])

    const login = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(login.current)
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        getLogin(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res.token)
                window.location.href = "/"
            } else {
                console.log(res);
            }
        })
    }


    return (
        <form action="" ref={login} className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-3xl text-indigo-600 font-semibold">Login</h1>
            <label htmlFor="">Username</label>
            <Input type="text" placeholder="Masukan username" name='username' />
            <label htmlFor="">Password</label>
            <Input type="password" placeholder="******" name='password' />
            <Button onlcik>
                Submit
            </Button>
            <span>Belum punya akun? <Link to={"/auth/register"}>Register</Link></span>
        </form>
    )
}

export default LoginForm