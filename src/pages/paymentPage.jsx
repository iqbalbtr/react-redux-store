import { useParams } from "react-router-dom"
import { decryptData } from "../utils/encriypt";
import { Container } from "react-bootstrap";
import PaymentForm from "../components/fragments/paymentForm";
import { useState } from "react";
import { toUSDCurrency } from "../utils/usdCurency";
import CardSubTotalPayment from "../components/cards/cartSubTotalPayment";
import useScrollToTop from "../hooks/useScrollToTop";


const PaymentPage = () => {

    const { idPayment } = useParams()
    const [dataCart, setDataCart] = useState(decryptData(idPayment))
    const isSingle = Array.isArray(decryptData(idPayment)) ? false : true
    const [product, setProduct] = useState({
        id : 0,
        product : dataCart,
        qty : 1
    })
    const toTop = useScrollToTop();
    

    const sumTotal = isSingle ? dataCart.price : dataCart.reduce((sum, item) => {
        return sum + item.product.price * item.qty
    }, 0)

    

    return (
        <Container>
            <div className="px-12 md:px-24 md:flex-row flex-col py-12 flex gap-12 justify-evenly md:items-start items-center">
                <div className="w-full md:w-fit">
                    <PaymentForm />
                </div>
                <div className="flex flex-col w-[300px] h-fit gap-4 p-6 text-white mt-12 rounded-md bg-primary">
                    <div className="flex w-full justify-between">
                        <h1 className="text-xl font-bold">Product</h1>
                        <h1 className="text-xl font-bold">Subtotal</h1>
                    </div>
                    <div className="flex flex-col">
                        {
                            isSingle ? (
                                <CardSubTotalPayment key={product.id} data={product} />
                            ) :
                                dataCart.map(cart => (
                                    <CardSubTotalPayment key={cart.id} data={cart} />
                                ))
                        }
                    </div>
                    <div className="flex w-full justify-between">
                        <h1 className="text-base font-bold">Total</h1>
                        <h1 className="text-2xl text-primary font-bold">{toUSDCurrency(sumTotal)}</h1>
                    </div>
                    <div className="flex w-full justify-center">
                        <button className="px-16 py-2 w-fit border bg-white text-primry font-semibold text-primary rounded-md">Place Order</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PaymentPage