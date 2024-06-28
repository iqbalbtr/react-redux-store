import { useSelector } from "react-redux";
import CartProduct from "../components/cards/cartProduct";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/header";
import Title from "../components/title/title";
import { Stack, Table } from "react-bootstrap";
import FooterFeature from "../components/footerFeature";
import { FETCH_STATUS } from "../services/statusFetch";
import Loading from "../components/loading";
import { toUSDCurrency } from "../utils/usdCurency";
import useScrollToTop from "../hooks/useScrollToTop";
import { PageTransition } from "../components/transition";
import { motion } from "framer-motion";

const Cartpage = ({ setToggle }) => {

    const cart = useSelector((state) => state.cart.data)
    const [total, setTotal] = useState([])
    const [status, setStatus] = useState(FETCH_STATUS.IDLE)
    const encodeUrl = encodeURIComponent(localStorage.getItem("cart"))
    const toTop = useScrollToTop()


    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                return acc + item.product.price * item.qty
            }, 0)
            setTotal(sum)
        }

    }, [cart])

    useEffect(() => {
        cart.forEach(item => {

        })
    }, [])

    return (
        <>
            <PageTransition />
            <MainHeader>
                <Title>
                    Cart
                </Title>
                <MainHeader.Path>
                    cart
                </MainHeader.Path>
            </MainHeader>
            <Stack className="bg-white w-full py-8 gap-12 flex flex-col md:flex-row justify-center md:px-24 items-start z-0">
                {
                    status === "loading" ? (
                        <Loading />
                    ) : (
                        <div className="overflow-x-auto w-full flex flex-col md:flex-row gap-12 justify-center items-center">
                            <Table cellPadding={15} className="md:w-auto bg-red px-2" >
                                <thead className="bg-[#F9F1E7]">
                                    <tr>
                                        <td></td>
                                        <td>Product</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td colSpan={4} className="hidden md:block">Sub Total</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody className="table-auto overflow-x-auto">
                                    {cart.map(data => {
                                        return <CartProduct key={data.id} data={data.product} qty={data.qty} />
                                    })}
                                </tbody>
                            </Table>
                            <div className="md:w-[25%] w-full bg-[#F9F1E7] py-6 px-16 flex flex-col justify-center items-center gap-4">
                                <Title>
                                    Cart Total
                                </Title>
                                <div className="flex w-full justify-between mt-8">
                                    <span>Sub Total : </span>
                                    <div className="flex flex-col items-end">
                                        {
                                            cart.map(cart => (
                                                <span key={cart.id}>{toUSDCurrency(cart.qty * cart.product.price)}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <span>Total : </span>
                                    <span>{cart.length > 0 && toUSDCurrency(total)}</span>
                                </div>
                                <Link to={`/product/cart/${encodeUrl}`}>
                                    <motion.button
                                        whileHover={{
                                            background: "orange",
                                            border: "none"
                                        }}
                                        className="p-2 mt-8 px-8  rounded-md bg-slate-700 text-white"
                                    >
                                        Checkout
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </Stack>
            <FooterFeature />
        </>
    );
};

export default Cartpage
