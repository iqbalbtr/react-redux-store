import { useEffect, useState } from 'react'
import Product from '../cards/products'
import { getProduct } from '../../services/auth.product'
import { Container } from 'react-bootstrap'
import Title from '../title/title'
import { FETCH_STATUS } from '../../services/statusFetch'
import Loading from '../loading'

const OurProduct = () => {

    const [product, setProduct] = useState([])
    const [status, setstatus] = useState(FETCH_STATUS.IDLE)


    useEffect(() => {
        getProduct(0, 8, setstatus, setProduct)
    }, [])

    return (
        <div className="my-8 mx-8 md:mx-36">
            <Container>
                <Title> Our Product</Title>
                {
                    status === "loading" ?
                        <Loading /> :
                        (
                            <div className="grid md:grid-cols-4 grid-cols-2 mt-24 gap-4 md:gap-12">
                                {product.map(data => (
                                    <Product data={data} key={data.id} />
                                ))}
                            </div>
                        )
                }
            </Container>
        </div>
    )
}

export default OurProduct