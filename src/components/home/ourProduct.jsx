import { useEffect, useState } from 'react'
import Product from '../cards/products'
import { addToCart } from '../../redux/slices/cartSlice'
import axios from 'axios'
import { getProduct } from '../../services/auth.product'
import { Container } from 'react-bootstrap'
import Title from '../title/title'

const OurProduct = () => {

    const [dataProduct, setdataProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        getProduct(8, (status, data) => {
            if (status) {
                setdataProduct(data)
                useEffect(() => {
                    setIsLoading(status)
                }, [status])
            } else {
                console.log(data);
            }
        })

    }, [])

    return (
        <div className="my-8 mx-8 md:mx-36">
            <Container>
                <Title> Our Product</Title>
                <div className="grid md:grid-cols-4 grid-cols-2 mt-24 gap-4 md:gap-12">
                {dataProduct.map(data => (
                    <Product data={data} key={data.id} />
                ))}
                {
                    isLoading && <span>Loading</span>
                }
                </div>
            </Container>
        </div>
    )
}

export default OurProduct