import { Route, Routes } from "react-router-dom"
import AboutPage from "./pages/aboutPage"
import LoginForm from "./components/fragments/loginForm"
import RegisterForm from "./components/fragments/registerForm"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addFromLocal } from "./redux/slices/cartSlice"
import FavoritePage from "./pages/favorite"
import ContactPage from "./pages/contactPage"
import Cartpage from "./pages/cartPage"
import { addFromLocalFav } from "./redux/slices/favSlice"
import { decryptData } from "./utils/encriypt"
import PaymentPage from "./pages/paymentPage"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { DetailProduct, HomePage, ProductPage } from "./pages"
import { Authlayout, CartLayout, ProductLayout } from "./layouts"

function App() {

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const getLocalCart = localStorage.getItem("cart")
    const getLocalFav = localStorage.getItem("fav")

    if (getLocalCart !== null) {
      const cart = decryptData(getLocalCart)
      dispatch(addFromLocal(cart))
    }

    if (getLocalFav !== null) {
      const fav = decryptData(getLocalFav)
      dispatch(addFromLocalFav(fav))
    }


  }, [])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
          <Route path="/auth" element={<Authlayout />} >
            <Route index path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductLayout />} >
            <Route index element={<ProductPage />} />
            <Route path=":idProduct" element={<DetailProduct />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="cart" element={<CartLayout />} >
              <Route index element={<Cartpage />} />
              <Route path=":idPayment" element={<PaymentPage />} />
            </Route>
          </Route>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </AnimatePresence>
  )
}

export default App
