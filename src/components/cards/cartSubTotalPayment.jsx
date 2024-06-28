import { toUSDCurrency } from "../../utils/usdCurency"

const CardSubTotalPayment = ({ data }) => {

    return (
        <div className="flex justify-between gap-1 w-full flex-col">
            <div className="flex justify-between">
                <div className="flex gap-1">
                    <h1 className="text-base  truncate max-w-[120px]">{data.product.title}</h1>
                    <span>x {data.qty}</span>
                </div>
                <h1 className="text-base ">{toUSDCurrency(data.product.price)}</h1>
            </div>
            <div className="flex justify-between">
                <h1 className="text-base">Subtotal</h1>
                <h1 className="text-base">{toUSDCurrency(data.product.price * data.qty)}</h1>
            </div>
        </div>
    )
}

export default CardSubTotalPayment