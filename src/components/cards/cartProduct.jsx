import { useDispatch } from "react-redux"
import { toUSDCurrency } from "../../utils/usdCurency"
import { addToCart, deleteCart, removeItem } from "../../redux/slices/cartSlice"
import { motion } from "framer-motion"

const CartProduct = (props) => {

    const dispatch = useDispatch()
    const { data, qty } = props
    const subTotal = qty * data.price

    return (
        <tr className="md:text-base">
            <td className="w-[80px] md:w-[150px]">
                <img className="w-full bg-orange-300 rounded-md object-cover md:object-contain aspect-square" src={data.images[0]} alt="" />
            </td>
            <td className="max-w-[16rem]">
                {data.title}
            </td>
            <td>
                {toUSDCurrency(data.price)}
            </td>
            <td>
                <motion.button
                    whileTap={{
                        scale: .85,
                        transition: {
                            duration: .2,
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2,
                            ease: "easeInOut"
                        }
                    }}
                    className="bg-orange-400 text-white rounded-md w-[25px] h-fit" onClick={() => dispatch(addToCart({ id: data.id }))}>
                    +
                </motion.button>
                <span className="mx-2">{qty}</span>
                <motion.button
                    whileTap={{
                        scale: .85,
                        transition: {
                            duration: .2,
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2,
                            ease: "easeInOut"
                        }
                    }}
                    className="bg-orange-400 text-white rounded-md w-[25px] h-fit" onClick={() => dispatch(deleteCart({ id: data.id }))}>
                    -
                </motion.button>
            </td>
            <td className="">
                {toUSDCurrency(subTotal)}
            </td>
            <td>
                <motion.button
                    whileTap={{
                        scale: .85,
                        transition: {
                            duration: .2,
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2,
                            ease: "easeInOut"
                        }
                    }}
                    className="p-2 bg-red-500 rounded-md" onClick={() => dispatch(removeItem(data.id))}>
                    <svg
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="times">
                        <path
                            fill="#fff"
                            d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                        >
                        </path>
                    </svg>
                </motion.button>
            </td>
        </tr>
    )
}

export default CartProduct