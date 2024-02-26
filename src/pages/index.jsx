import Header from "../components/home"
import Inpiration from "../components/home/inpiration"
import OurProduct from "../components/home/ourProduct"
import RangeBrowser from "../components/home/range"
import MainLayout from "../layouts/mainLayout"

const HomePage = () => {

    return (
        <div>
            <MainLayout>
                <Header />
                <RangeBrowser />
                <OurProduct />
                <Inpiration />
            </MainLayout>
        </div>
    )
}

export default HomePage