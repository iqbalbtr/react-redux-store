import { Stack } from "react-bootstrap"


const FooterFeature = () => {
    return (
        <Stack className="md:px-24 px-6 row py-6 md:py-12 flex gap-6 w-full justify-between bg-[#F9F1E7]">
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <img src="/assets/img/trophy.png" alt="" className="md:w-1/3 w-auto" />
                <div className="flex flex-col text-center md:text-left">
                    <h1 className="md:text-xl text-sm font-bold">High Quality</h1>
                    <span className="md:text-base text-[10px]">crafted from top materials</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <img src="/assets/img/guarantee.png" alt="" className="md:w-1/3 w-auto" />
                <div className="flex flex-col text-center md:text-left">
                    <h1 className="md:text-xl text-sm font-bold">Waranty Protection</h1>
                    <span className="md:text-base text-[10px]">Over 2 years</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <img src="/assets/img/shipping.png" alt="" className="md:w-1/3 w-auto" />
                <div className="flex flex-col text-center md:text-left">
                    <h1 className="md:text-xl text-sm font-bold">Free Shipping</h1>
                    <span className="md:text-base text-[10px]">Order over 150 $</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <img src="/assets/img/customer-support.png" alt="" className=" md:w-1/3 w-auto" />
                <div className="flex flex-col text-center md:text-left">
                    <h1 className="md:text-xl text-sm font-bold">24/7 Support</h1>
                    <span className="md:text-base text-[10px]">Dedicated support</span>
                </div>
            </div>
        </Stack>
    )
}

export default FooterFeature