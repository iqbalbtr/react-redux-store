import { Container, Stack } from "react-bootstrap"
import FooterFeature from "../components/footerFeature"
import MainHeader from "../components/header"
import Title from "../components/title/title"
import { MainLayout } from "../layouts"
import ContactForm from "../components/fragments/contactForm"
import { PageTransition } from "../components/transition"
import { motion } from "framer-motion"

const ContactPage = () => {

    const parent = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.25
            }
        }
    }
    const child = {
        hidden: {
            opacity: 0,
            x: "-50%",
            filter: "blur(5px)"
        },
        show: {
            x: 0,
            opacity: 1,
            filter: "blur(0)",
            transition: {
                duration: 0.95,
            }
        }
    }

    return (
        <MainLayout>
            <PageTransition />
            <Container>
                <MainHeader>
                    <Title>
                        Contact
                    </Title>
                    <MainHeader.Path>
                        <span>Contact</span>
                    </MainHeader.Path>
                </MainHeader>
                <Stack className="flex flex-col px-8 md:px-24 py-12">
                    <motion.div
                        initial={{
                            opacity: 0,
                            filter: "blur(5px)"
                        }}
                        whileInView={{
                            opacity: 1,
                            filter: "blur(0)",
                            transition: {
                                duration: 0.8
                            }
                        }}
                        viewport={{once: true}}
                        className="flex flex-col py-16 gap-6 w-full justify-center items-center">
                        <h1 className="text-3xl md:text-4xl font-bold">Get In Touch With Us</h1>
                        <span className="text-center max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, harum cupiditate veritatis nam odit doloribus maxime, ipsam non aut accusantium fuga alias corrupti nisi.</span>
                    </motion.div>
                    <div className="w-full flex-col md:flex-row py-8 flex justify-center gap-32">
                        <motion.div
                            variants={parent}
                            viewport={{once: true}}
                            initial="hidden"
                            whileInView="show"
                            className="flex w-auto gap-6 flex-col">
                            <motion.div
                                variants={child}>
                                <DetailInfo
                                    icon=""
                                    nameInfo="Address"
                                    detailInfo="236 5th SE Avenue, New York NY10000, United States"
                                />
                            </motion.div>
                            <motion.div
                                variants={child}>
                                <DetailInfo
                                    icon=""
                                    nameInfo="Working Time"
                                    detailInfo="Monday-Friday: 9:00 - 22:00
                                    Saturday-Sunday: 9:00 - 21:00"
                                />
                            </motion.div>
                            <motion.div
                                variants={child}>
                                <DetailInfo
                                    icon=""
                                    nameInfo="Phone"
                                    detailInfo="Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789"
                                />
                            </motion.div>


                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: "50%"
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.85,
                                    ease: "anticipate"
                                }
                            }}
                            className=" md:w-[40%]">
                            <ContactForm />
                        </motion.div>
                    </div>
                </Stack>
                <FooterFeature />
            </Container>
        </MainLayout>
    )
}


const DetailInfo = (props) => {

    const { icon, nameInfo, detailInfo } = props
    return (
        <Stack className="flex gap-2">
            {icon}
            <div className="flex-col flex gap-2">
                <h1 className="text-xl font-bold">{nameInfo}</h1>
                <span className="max-w-[200px]">{detailInfo}</span>
            </div>
        </Stack>
    )
}

export default ContactPage