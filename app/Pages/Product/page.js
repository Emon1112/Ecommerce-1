'use client'
import { ProductContext } from '@/app/Api/ProductContextprovider';
import React from 'react';
import { useContext } from 'react';

const Page = () => {
    const { product } = useContext(ProductContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
            {product.map((item) => (
                <div key={item.id} className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200 hover:shadow-xl transition">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 mt-2 text-lg font-medium">${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;
