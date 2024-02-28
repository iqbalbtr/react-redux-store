import { useEffect, useState } from 'react'
import Product from '../../cards/products'
import { Container } from 'react-bootstrap'
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'
import { getProduct } from '../../../services/auth.product'
import { FETCH_STATUS } from '../../../services/statusFetch'
import Title from '../../title/title'
import Loading from '../../loading'

const OurProduct = () => {

    const [product, setProduct] = useState([])
    const [status, setstatus] = useState(FETCH_STATUS.IDLE)

    useEffect(() => {
        getProduct(0, 8, setstatus, setProduct)
    }, [])

    const container = {
        hidden: { 
            opacity: 0 
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
                ease: "linear"
            }
        }
    }

    const item = {
        hidden: { 
            opacity: 0,
            y: "50%"
        },
        show: { 
            opacity: 1,
            y:0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div
            className={"my-8 mx-8 md:mx-36"}
        >
            <Container>
                <Title> Our Product</Title>
                {
                    status === "loading" ?
                        <Loading /> : (
                            <AnimatePresence>
                                <motion.div
                                    variants={container}
                                    whileInView="show"
                                    initial="hidden"
                                    viewport={{once: true}}
                                    className="grid md:grid-cols-4 grid-cols-2 mt-24 gap-4 md:gap-12"
                                >
                                    {product.map((data, i) => (
                                        <motion.div
                                            variants={item}
                                        >
                                            <Product data={data} key={i} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        )
                }
            </Container>
        </div>
    )
}

export default OurProduct