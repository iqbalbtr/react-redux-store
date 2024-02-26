import { Card, Container, Row } from "react-bootstrap"
import Title from "../title/title"
import { motion } from "framer-motion"

const RangeBrowser = () => {
    const inpirationData = [
        {
            id: 1,
            src: "/assets/img/range-1.png",
            label: "Bedroom"
        },
        {
            id: 2,
            src: "/assets/img/range-2.png",
            label: "Living"
        },
        {
            id: 3,
            src: "/assets/img/range-3.png",
            label: "Dining"
        }
    ]
    return (
        <div className="my-12 flex justify-center mx-4 md:mx-32">
            <Container>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                >
                    <Title>
                        Browse The Range
                    </Title>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque?</p>
                </motion.div>
                <Row className="flex md:flex-row flex-col gap-6 mt-16 px-8 md:px-0">
                    {
                        inpirationData.map((data, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    x: "50%",
                                    opacity: 0
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                                viewport={{once: true}}
                            >
                                <Card>
                                    <Card.Img variant="top" src={data.src} />
                                    <Card.Body>
                                        <Card.Title className="text-center font-semibold mt-4 text-xl">{data.label}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
export default RangeBrowser