import { Link, useParams } from "react-router-dom"
import dataProduct from "../assets/json/product.json"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/slices/cartSlice"
import { getAllProduct, getIdProduct } from "../services/auth.product"
import { Stack } from "react-bootstrap"
import Loading from "../components/loading"
import { FETCH_STATUS } from "../services/statusFetch"

const ProductDetails = () => {

    const { idParams } = useParams()
    const dispatch = useDispatch()

    const [product, setProduct] = useState([])
    const [rate, setRate] = useState(0)

    const [status, setStatus] = useState(FETCH_STATUS.IDLE)

    useEffect(() => {
        getIdProduct(idParams, setProduct, setStatus)
    }, [])

    setTimeout(() => {
        setRate(Math.round(product.rating.rate))
    }, 1000)

    return (

        <div>
            {status === "loading" ? (
                <Loading />
            ) : (
                <>
                    <Stack className="bg-[#F9F1E7] py-6 w-full px-6 md:px-24">
                        <span>Home - Shop  |  </span>
                        <span>{product.title}</span>
                    </Stack>
                    <div className="flex md:flex-row flex-col items-start gap-12 relative py-9 px-8 md:px-32">
                        <img
                            className="object-contain h-fit md:w-1/3 aspect-square mb-12 bg-white"
                            src={product.image}
                            alt=""
                        />
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-bold max-w-2xl">{product.title}</h1>
                            <span className="text-2xl text-slate-400 font-semibold">{product.price?.toLocaleString("en-US", { style: 'currency', currency: "USD" })}</span>
                            <div className="flex gap-1">
                                {
                                    [...Array(rate)].map((num, i) => (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={15} viewBox="0 0 24 24" id="star">
                                            <path fill="orange" d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path>
                                        </svg>
                                    ))
                                }
                            </div>
                            <span className="max-w-lg">{product?.description}</span>
                            <div className="flex gap-6 mt-12">
                                <button className="py-3 px-10 rounded-md border md:text-base text-[10px] border-black" onClick={() => dispatch(addToCart({ id: product.id, price: product.price, qty: 1 }))}>ADD TO CART</button>
                                <button className="py-3 px-10 md:text-base text-[10px] rounded-md border border-black">BUY</button>
                                <button className="p-3 md:text-base text-[10px] rounded-md border border-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 24 24" id="heart">
                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <Link className="absolute top-5 right-5" to={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} id="times-circle">
                                    <path d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z"></path>
                                </svg>
                            </Link>
                            <div className="border-black border-t w-full my-12"></div>
                            <Stack className="w-full flex flex-col ">
                                <span>SKU      : ----</span>
                                <span>Category : {product.category}</span>
                                <div className="flex gap-1">
                                    <span>Share    :</span>
                                </div>
                            </Stack>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductDetails