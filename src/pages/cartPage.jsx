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
import { getSingleProduct } from "../services/auth.product";
import { toUSDCurrency } from "../utils/usdCurency";

const Cartpage = ({ setToggle }) => {

    const cart = useSelector((state) => state.cart.data)
    const [total, setTotal] = useState([])
    const [status, setStatus] = useState(FETCH_STATUS.IDLE)
    const encodeUrl = encodeURIComponent(localStorage.getItem("cart"))

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
                        <>
                            <Table cellPadding={15} className="md:w-auto w-full px-2" >
                                <thead className="bg-[#F9F1E7]">
                                    <tr>
                                        <td></td>
                                        <td>Product</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td colSpan={4} className="hidden md:block">Sub Total</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(data => {
                                        // const existing = getSingleProduct(cart.product.id)
                                        // return existing ? (
                                            
                                        // ) : null;
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
                                    <button className="p-2 mt-8 px-8 border border-black rounded-md">Checkout</button>
                                </Link>
                            </div>
                        </>
                    )
                }
            </Stack>
            <FooterFeature />
        </>
    );
};

export default Cartpage
