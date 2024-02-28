import React from 'react'
import { ContainerProduct, HeaderProduct, NavProduct } from '../components/pages'
import { PageTransition } from '../components/transition'

function ProductPage() {
    return (
        <div>
            <PageTransition />
            <HeaderProduct />
            <NavProduct />
            <ContainerProduct />
        </div>
    )
}

export default ProductPage
