'use client'
import { CartContext } from '@/app/Api/CartContext';
import { ProductContext } from '@/app/Api/ProductContextprovider';
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';

const PopularProduct = () => {
    const { product } = useContext(ProductContext);

    // Select top 6 products based on highest rating
    const topRatedProducts = product
        .sort((a, b) => b.rating.rate - a.rating.rate) // Sort products by rating rate in descending order
        .slice(0, 6); // Get the top 6 products

    return (
        <div>
            <h1 className="text-center font-bold">Popular Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
                {topRatedProducts.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200 hover:shadow-xl transition" >
                        <Link href={`/Pages/Product/${item.id}`}>
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />


                        </Link>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <div>
                                <p className="text-gray-600 mt-2 text-lg font-medium">${item.price}</p>
                                <p className="text-yellow-500 mt-1">{item.rating.rate} stars</p> {/* Display rating rate */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;
