import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/slices/cartSlice"
import { Stack } from "react-bootstrap"
import Loading from "../components/loading"
import { FETCH_STATUS } from "../services/statusFetch"
import { getSingleProduct } from "../services/auth.product"
import { removeFavItem, addFavItem } from "../redux/slices/favSlice"
import { toUSDCurrency } from "../utils/usdCurency"
import { encryptData } from "../utils/encriypt"
import useScrollToTop from "../hooks/useScrollToTop"
import useFetch from "../hooks/useFetch"
import axios from "axios"

const ProductDetails = () => {

    const dispatch = useDispatch()
    const { idProduct } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState()
    const [status, setStatus] = useState(FETCH_STATUS.IDLE)
    const [slideImage, setSlideImg] = useState(0)
    const fav = useSelector((state) => state.favorite.data)
    const existing = fav.find(item => item.id == idProduct)
    const encodeUrl = encodeURIComponent(encryptData(product))
    const toTop = useScrollToTop()

    const handleFav = () => {
        if (existing) {
            dispatch(removeFavItem(product))
        } else {
            dispatch(addFavItem(product))
        }
    }

    useEffect(() => {
        getSingleProduct(idProduct, setProduct, setStatus)
    }, [])

    return (

        <div>
            {status === "loading" ? (
                <Loading />
            ) : (
                <>
                    <Stack className="bg-[#F9F1E7] py-6 w-full flex justify-between px-6 md:px-24">
                        <div className="flex">
                            <span>Home - Shop  |  </span>
                            <span>{product?.title}</span>
                        </div>
                        <Link onClick={() => navigate(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} id="times-circle">
                                <path d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z"></path>
                            </svg>
                        </Link>
                    </Stack>
                    <div className="flex md:flex-row flex-col items-start gap-12 relative py-9 px-8 md:px-32">
                        <div className="h-fit flex-col-reverse md:flex-row flex items-start gap-2 md:w-[40%] aspect-square mb-12 bg-white">
                            <div className="flex md:flex-col gap-2 w-[20%]">
                                {
                                    product?.images.map((img, i) => (
                                        <img key={i} src={img} alt="" onClick={() => setSlideImg(i)} />
                                    ))
                                }
                            </div>
                            <img
                                className="md:w-[80%] w-[85%] aspect-square object-contain"
                                src={product?.images[slideImage]}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-bold max-w-2xl">{product?.title}</h1>
                            <span className="text-2xl text-slate-400 font-semibold">{toUSDCurrency(product?.price || 0)}</span>
                            <span className="max-w-lg">{product?.description}</span>
                            <div className="flex gap-6 mt-12">
                                <button className="py-3 px-10 rounded-md border md:text-base text-[10px] border-black" onClick={() => dispatch(addToCart({ id: product.id, product: product, qty: 1 }))}>ADD TO CART</button>
                                <Link
                                to={`/product/cart/${encodeUrl}`}
                                    className="py-3 px-10 md:text-base text-[10px] rounded-md border border-black"
                                >
                                    BUY
                                </Link>
                                <button
                                    className="p-3 md:text-base text-[10px] rounded-md border border-black"
                                    onClick={() => handleFav()}
                                >
                                    <svg fill={existing ? "#ff69b4" : "#000"} width={25} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 230 230">
                                        <path d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083C235.26,57.99,236.537,96.466,213.588,120.982z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="border-black border-t w-full my-12"></div>
                            <Stack className="w-full flex flex-col ">
                                <span>SKU      : ----</span>
                                <span>Category : {product?.category.name}</span>
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