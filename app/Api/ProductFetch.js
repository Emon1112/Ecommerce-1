'use client'

import { useEffect, useState } from "react"
import { ProductContext } from "./ProductContextprovider"

export function ProductFetch({ children }) {
    const [product, getProduct] = useState([]);
    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            getProduct(data)
        }
        fetchProduct()
    }, [])
    if (!product) return <div>Loading...</div>

    return (
        <ProductContext.Provider value={{ product }}>
            {children}
        </ProductContext.Provider>



    )
}