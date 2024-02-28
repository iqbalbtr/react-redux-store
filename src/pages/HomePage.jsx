import { HeaderHome, Inpiration, OurProduct, RangeBrowser } from "../components/pages"
import { PageTransition } from "../components/transition"
import { MainLayout } from "../layouts"

const HomePage = () => {

    return (
        <div className="overflow-x-hidden">
            <PageTransition />
            <MainLayout>
                <HeaderHome />
                <RangeBrowser />
                <OurProduct />
                <Inpiration />
            </MainLayout>
        </div>
    )
}

export default HomePage