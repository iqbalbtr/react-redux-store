import Input from "../element/input"
import Button from "../element/button"
import { Link } from "react-router-dom"

const RegisterForm = () => {
    return (
        <form action="" className="flex flex-col gap-6">
            <h1 className="text-3xl text-indigo-600 font-semibold">Register</h1>
            <label htmlFor="">Email</label>
            <Input type="email" placeholder="Masukan username" />
            <label htmlFor="">Username</label>
            <Input type="text" placeholder="Masukan username" />
            <label htmlFor="">Password</label>
            <Input type="password" placeholder="******" />
            <Button>
                Submit
            </Button>
            <span>Sudah punya akun? <Link to={"/auth/login"}>Login</Link></span>
        </form>
    )
}

export default RegisterForm