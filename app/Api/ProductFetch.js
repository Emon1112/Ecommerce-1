'use client'

import { useEffect, useState } from "react"
import { ProductContext } from "./ProductContextprovider"

export function ProductFetch({ children }) {
    const [product, getProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const link = (section) => {
        section
    }

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`https://fakestoreapi.com/products/category/${section}`);
            const data = await res.json()
            getProduct(data)
        }
        fetchProduct()
    }, [])
    if (!product) return <div>Loading...</div>

    useEffect(() => {
        async function Categories() {
            const res = await fetch('https://fakestoreapi.com/products/categories')
            const data = await res.json()
            setCategories(data)
        }
        Categories()
    }, [])

    return (
        <ProductContext.Provider value={{ product, categories, link }}>
            {children}
        </ProductContext.Provider>



    )
}