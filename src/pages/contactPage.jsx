import { Container, Stack } from "react-bootstrap"
import FooterFeature from "../components/footerFeature"
import MainHeader from "../components/header"
import Title from "../components/title/title"
import MainLayout from "../layouts/mainLayout"
import ContactForm from "../components/fragments/contactForm"

const ContactPage = () => {


    return (
        <MainLayout>
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
                    <div className="flex flex-col py-16 gap-6 w-full justify-center items-center">
                        <h1 className="text-3xl md:text-4xl font-bold">Get In Touch With Us</h1>
                        <span className="text-center max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, harum cupiditate veritatis nam odit doloribus maxime, ipsam non aut accusantium fuga alias corrupti nisi.</span>
                    </div>
                    <div className="w-full flex-col md:flex-row py-8 flex justify-center gap-32">
                        <div className="flex w-auto gap-6 flex-col">
                            <DetailInfo
                                icon=""
                                nameInfo="Address"
                                detailInfo="236 5th SE Avenue, New York NY10000, United States"
                            />
                            <DetailInfo
                                icon=""
                                nameInfo="Phone"
                                detailInfo="Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789"
                            />
                            <DetailInfo
                                icon=""
                                nameInfo="Working Time"
                                detailInfo="Monday-Friday: 9:00 - 22:00
                                    Saturday-Sunday: 9:00 - 21:00"
                            />
                        </div>
                        <div className=" md:w-[40%]">
                            <ContactForm />
                        </div>
                    </div>
                </Stack>
                <FooterFeature />
            </Container>
        </MainLayout>
    )
}

const Input = (props) => {

    const { children, name, placeholder, type } = props
    return (
        <div className="flex flex-col gap-6 w-full">
            <span>{children}</span>
            <input type={type ? type : "text"} placeholder={placeholder} name={name} required className="p-4 border border-slate-600 rounded-lg" />
        </div>
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