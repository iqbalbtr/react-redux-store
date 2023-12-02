import { Route, Routes } from "react-router-dom"
import HomePage from "./pages"
import ProductDetails from "./pages/productDetail"
import AboutPage from "./pages/aboutPage"
import LoginForm from "./components/fragments/loginForm"
import RegisterForm from "./components/fragments/registerForm"
import AuthLayout from "./layouts/authLayout"
import ProductPageIndex from "./components/product/productPageIndex"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addFromLocal } from "./redux/slices/cartSlice"
import FavoritePage from "./pages/favorite"
import ContactPage from "./pages/contactPage"
import Cartpage from "./pages/cartPage"
import { addFromLocalFav } from "./redux/slices/favSlice"
import { decryptData } from "./utils/encriypt"
import PaymentPage from "./pages/paymentPage"
import ProductLayout from "./layouts/productLayout"
import Cartlayout from "./layouts/cartLayout"

function App() {

  const dispatch = useDispatch()

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
    <>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} >
          <Route index path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductLayout />} >
          <Route index element={<ProductPageIndex />} />
          <Route path="cart" element={ <Cartlayout/> } >
            <Route index element={<Cartpage />} />
            <Route path=":idPayment" element={<PaymentPage />} />
          </Route>
          <Route path="favorite" element={<FavoritePage />} />
          <Route path=":idProduct" element={<ProductDetails />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
