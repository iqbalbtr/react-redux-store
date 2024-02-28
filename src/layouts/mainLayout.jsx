import Footer from "../components/footer"
import { NavBar } from "../components/navbar"

const MainLayout = (props) => {

    const {children} = props

    return (
        <section>
            <NavBar />
                {children}
            <Footer />
        </section>
    )
}

export default MainLayout