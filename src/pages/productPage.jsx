import { useEffect, useState } from "react"
import MainLayout from "../layouts/mainLayout"
import { Outlet } from "react-router-dom"

const ProductPage = () => {

    return (
        <MainLayout>
            <Outlet/>
        </MainLayout>
    )
}

export default ProductPage