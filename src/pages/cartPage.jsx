import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/cards/cartProduct";
import { useEffect, useState } from "react";
import { getAllProduct } from "../services/auth.product";
import { useNavigate, Link } from "react-router-dom";
import MainHeader from "../components/header";
import Title from "../components/title/title";
import { Stack, Table } from "react-bootstrap";
import FooterFeature from "../components/footerFeature";
import { FETCH_STATUS } from "../services/statusFetch";
import Loading from "../components/loading";

const Cartpage = ({ setToggle }) => {

    const cart = useSelector((state) => state.cart.data)
    const [total, setTotal] = useState([])
    const [product, setProduct] = useState([])

    const navigate = useNavigate()
    const [status, setStatus] = useState(FETCH_STATUS.IDLE)

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                return acc + item.price * item.qty
            }, 0)
            setTotal(sum.toFixed(2))
        }

    }, [cart])


    useEffect(() => {
        getAllProduct(setProduct, setStatus)
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
                                        const existing = product.find(product => product.id === data.id)
                                        return existing ? (
                                            <CartProduct key={data.id} data={existing} qty={data.qty} />
                                        ) : null;
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
                                                <span key={cart.id}>{cart.qty * cart.price}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <span>Total : </span>
                                    <span>{cart.length > 0 && total}</span>
                                </div>
                                <button className="p-2 mt-8 px-8 border border-black rounded-md">Checkout</button>
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
