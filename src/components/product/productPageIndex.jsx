import { useEffect, useState } from "react"
import { getAllProduct, getFilterCategory } from "../../services/auth.product"
import Product from "../cards/products"
import ProductHeader from "."
import NavProduct from "./navProduct"
import Loading from "../loading"
import { FETCH_STATUS } from "../../services/statusFetch"

const ProductPageIndex = () => {
    const [product, setProduct] = useState([])
    const [status, setStatus] = useState(FETCH_STATUS.IDLE)
    const [category, setCategory] = useState("default")

    const filterProduct = (data) => {
        // if (data === "default") {
        //     getAllProduct(setProduct, setStatus)
        // } else {
        //     getFilterCategory(data, (status, data) => {
        //         if (status) {
        //             setProduct(data)
        //         }
        //     })
        // }
    }

    useEffect(() => {
            getAllProduct(setProduct, setStatus)
    }, [])

    return (
        <>
            {status === "loading" ? (
                <Loading />) : (
                <>
                    <ProductHeader />
                    <NavProduct filterProduct={filterProduct} category={category} setCategory={setCategory} />
                    <div className="w-full min-h-screen px-4 md:px-24 py-6">
                        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 justify-between items-center">
                            {product.map(data => (
                                <Product key={data.id} data={data} />
                            ))}
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default ProductPageIndex