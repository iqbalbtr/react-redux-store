import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Container, Navbar } from "react-bootstrap"
import CardProfile from "../cards/cardProfile"
import { tokenValidation } from "../../utils/tokenValidation"
import BtnMenu from "../element/button/butonMenu"
import { Overlay } from "../../layouts"
import { motion } from "framer-motion"

const NavBar = () => {

    const navLink = [
        {
            id: 1,
            path: "/product",
            name: "Product"
        },
        {
            id: 2,
            path: "/about",
            name: "About"
        },
        {
            id: 3,
            path: "/contact",
            name: "Contact"
        }
    ]

    const cart = useSelector((state) => state.cart.data)
    const fav = useSelector((state) => state.favorite.data)
    const [cartNotif, setCartNotif] = useState(0)
    const [favNotif, setFavNotif] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [toggleUser, setToggleUser] = useState(false)
    const [token, setToken] = useState({
        status: false,
        token: null,
        refreshToken: null
    })
    const dispacth = useDispatch()

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)

        if (cart.length > 0) {
            setCartNotif(sum)
        }

    }, [cart])

    useEffect(() => {
        setFavNotif(fav.length)
    }, [fav])

    useEffect(() => {
        tokenValidation((status, token) => {
            if (status) {
                setToken({
                    status: true,
                    token: token["access_token"],
                    refreshToken: token["refresh_token"]
                })

                const req = {
                    headers: {
                        "Authorization": `Bearer ${token["access_token"]}`
                    }
                }

                getUserInfo(req, (status, data) => {
                    if (status) {
                        dispacth(addUser(data))
                    }
                })
            } else {
                setToken({
                    status: false
                })
            }
        })
    }, [])


    return (
        <Navbar className="w-full bg-white">
            <Container fluid="md">
                <div className="flex justify-between py-4 px-5 md:px-24 relative">
                    <Link to='/' className="flex items-center justify-center gap-3">
                        <span className="text-base md:text-xl font-bold text-primary">Clot's Shop</span>
                    </Link>
                    <div style={toggle ? { opacity: "1" } : { opacity: "1" }}
                        className={`md:flex hidden ${toggle ? "nav-active" : ""} md:flex-row rounded-md flex-col md:gap-12 gap-4 md:p-0 p-6 md:top-0 md:right-0 opacity-0 md:opacity-100 top-16 md:relative right-28  md:bg-transparent md:items-center absolute bg-background`}>
                        {
                            navLink.map(link => (
                                <div
                                    key={link.id}
                                    className="relative group"
                                >
                                  
                                    <NavLink
                                        to={link.path}
                                        className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                                    >
                                        {link.name}
                                    </NavLink>
                                </div>

                            ))
                        }
                    </div>
                    <div className="flex gap-3 md:gap-6 justify-center items-center">
                        <button onClick={() => setToggle(cur => !cur)} className="block md:hidden">
                            <BtnMenu />
                        </button>
                        <Link to="/product/favorite" className="relative">
                            {fav.length > 0 && <span className="absolute text-[10px] text-white bg-red-600 p-0.5 px-1.5 rounded-full -bottom-2 -right-2">{favNotif}</span>}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} id="heart">
                                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                            </svg>
                        </Link>
                        <Link to="/product/cart" className="relative" >
                            {cart.length > 0 ? <span className="absolute text-[10px] text-white bg-red-600 p-0.5 px-1.5 rounded-full -bottom-2 -right-2">{cartNotif}</span> : null}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25}>
                                <path fill="black" d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z"></path>
                            </svg>
                        </Link>
                        <Link to={token.status ? "" : "/auth/login"} className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={25}
                                viewBox="0 0 24 24"
                                id="user"
                                onClick={() => setToggleUser(cur => !cur)}
                            >
                                <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
                            </svg>
                            <Overlay
                                toggle={toggleUser}
                                setToggle={setToggleUser}
                            >
                                <CardProfile />
                            </Overlay>
                        </Link>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar