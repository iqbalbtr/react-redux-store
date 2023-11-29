import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <div className="w-full md:px-24 px-8 py-12">
            <Container className="w-full">
                <div className="flex flex-col md:flex-row gap-12 w-full justify-evenly">
                    <div className="flex flex-col gap-12 ">
                        <h1 className="text-2xl font-bold">FUNIRO.</h1>
                        <p className="max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero rem doloremque debitis?</p>
                    </div>
                    <div className="flex flex-col gap-6 font-semibold justify-between">
                        <span className="text-slate-400">Link</span>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/product"}>Product</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    <div className="flex flex-col gap-6 font-semibold">
                        <span className="text-slate-400">Help</span>
                        <Link>Payment Options</Link>
                        <Link>Returns</Link>
                        <Link>Privacy Policies</Link>
                    </div>
                    <div className="flex flex-col gap-6 font-semibold ">
                        <span className="text-slate-400">Contact</span>
                        <div className="flex gap-4">
                            <input type="text" className="p4 outline-none border-b border-black" /> 
                            <button className="border-b border-black">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="border-b border-black my-6"></div>
                    <span>2023 furino. All rights reverved</span>
            </Container>
        </div>
    )
}

export default Footer