import Input from "../element/input"
import Button from "../element/button"
import { Link } from "react-router-dom"

const RegisterForm = () => {
    return (
        <form action="" className="bg-primary p-8 w-[400px] rounded-md text-white">
            <h1 className="text-4xl font-semibold mb-2 text-white">Login</h1>
            <span>Register to your account!</span>
            <div
                className="flex  mt-8 flex-col gap-2"
            >
                <div className="flex flex-col gap-1 ">
                    <label className="text-xl" htmlFor="">Email</label>
                    <div className="flex flex-col gap-1 relative">
                        <svg
                            className="absolute top-1/2 right-4 -translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="user"
                            width={20}
                        >
                            <path
                                d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
                        </svg>
                        <input
                            type="email"
                            placeholder="user234..."
                            className="text-black rounded-md py-2 px-4"
                            name="email"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 ">
                    <label className="text-xl" htmlFor="">Passoword</label>
                    <div className="text-white relative text-black">
                        <svg
                            className="absolute top-1/2 right-4 -translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            viewBox="0 0 24 24"
                            id="eye"
                            
                            
                        >
                            <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path>
                        </svg>
                        <svg
                            className="absolute text-black top-1/2 right-4 -translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            width={20}
                            viewBox="0 0 24 24"
                            id="eye-slash"
                        
                            
                        >
                            <path
                                d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"
                            ></path>
                        </svg>
                        <input
                           
                            placeholder="user234..."
                            className="rounded-md text-black py-2 px-4 w-full"
                            name="password"
                        />
                    </div>
                </div>
                <span>Belum punya akun? <Link className="" to={"/auth/register"}>Register</Link></span>
                <button className="py-2 px-6 rounded-md mt-8 text-primary bg-background">Submit</button>
            </div>
        </form>
    )
}

export default RegisterForm