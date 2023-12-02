import { useEffect, useState } from "react"
import { getCatgoryProduct, getProduct } from "../../services/auth.product"
import Product from "../cards/products"
import ProductHeader from "."
import NavProduct from "./navProduct"
import Loading from "../loading"
import { FETCH_STATUS } from "../../services/statusFetch"
import PaginationList from "../pagination"
import { useSelector } from "react-redux"

const ProductPageIndex = () => {

    const [product, setProduct] = useState([])
    const [status, setStatus] = useState(FETCH_STATUS.IDLE)
    const category = useSelector((state) => state.category.data)
    const pagination = useSelector((state) => state.pagination.data)

    useEffect(() => {
        if(pagination.status === "default") {
            getProduct(pagination.offset, pagination.limit, setStatus, setProduct)
        } else {
            ""
        }
    }, [pagination])

    useEffect(() => {
        if (category.id === 0) {
            getProduct(pagination.offset, pagination.limit, setStatus, setProduct)
        } else {
            getCatgoryProduct(category.id, pagination.limit, pagination["offset"], setProduct, setStatus)
        }
    }, [category])

    return (
        <>
            {status === "loading" ? (
                <Loading />) : (
                <>
                    <ProductHeader />
                    <NavProduct />
                    <div className="w-full min-h-screen px-4 md:px-24 py-6">
                        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 justify-between items-center">
                            {product.map(data => (
                                <Product key={data.id} data={data} />
                            ))}
                        </div>
                        <PaginationList />
                    </div>
                </>
            )
            }
        </>
    )
}

export default ProductPageIndex