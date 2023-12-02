import { useEffect, useState } from "react"
import MainLayout from "../layouts/mainLayout"
import { Outlet } from "react-router-dom"

const ProductLayout = () => {

    return (
        <MainLayout>
            <Outlet/>
        </MainLayout>
    )
}

export default ProductLayout