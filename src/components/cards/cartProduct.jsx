import { useDispatch } from "react-redux"
import { addToCart, deleteCart, removeItem } from "../../redux/slices/cartSlice"

const CartProduct = (props) => {

    const dispatch = useDispatch()
    const { data, qty } = props
    const subTotal = qty * data.price



    return (
        <tr className="text-[10px] md:text-base">
            <td className="w-[80px] md:w-[150px]">
                <img className="w-full object-cover md:object-contain aspect-square" src={data.image} alt="" />
            </td>
            <td className="max-w-[16rem]">
                {data.title}
            </td>
            <td>
                {data.price}
            </td>
            <td>
                <button className="bg-white w-[25px] h-fit" onClick={() => dispatch(addToCart({ id: data.id, price: data.price, qty: 1 }))}>+</button>
                <span>{qty}</span>
                <button className="bg-white w-[25px] h-fit" onClick={() => dispatch(deleteCart({ id: data.id }))}>-</button>
            </td>
            <td className="">
                {subTotal}
            </td>
            <td>
                <button onClick={() => dispatch(removeItem(data.id))}>Del</button>
            </td>
        </tr>
    )
}

export default CartProduct