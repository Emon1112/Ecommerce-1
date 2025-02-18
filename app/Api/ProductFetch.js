'use client'

import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContextprovider";

export function ProductFetch({ children }) {
    const [product, getProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

    // Function to update category and refetch data
    const link = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        async function fetchProduct() {
            const url = selectedCategory
                ? `https://fakestoreapi.com/products/category/${selectedCategory}`
                : 'https://fakestoreapi.com/products';

            const res = await fetch(url);
            const data = await res.json();
            getProduct(data);
        }
        fetchProduct();
    }, [selectedCategory]); // Refetch when category changes

    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch('https://fakestoreapi.com/products/categories');
            const data = await res.json();
            setCategories(data);
        }
        fetchCategories();
    }, []);

    return (
        <ProductContext.Provider value={{ product, categories, link }}>
            {children}
        </ProductContext.Provider>
    );
}
