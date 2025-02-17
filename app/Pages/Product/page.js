'use client'
import { useContext, useState } from 'react';
import { ProductContext } from '@/app/Api/ProductContextprovider';
import Link from 'next/link';

const Page = () => {
    const { product } = useContext(ProductContext);
    const [searchQuery, setSearchQuery] = useState('');
    const { categories, link } = useContext(ProductContext);


    // Filter products based on search input
    const filteredProducts = product.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="p-5 min-h-screen mt-10">
            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="🔍 Search for a product..."
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
                {categories.map((section, index) => (
                    <button
                        key={index}
                        className="p-4 px-5 sm:p-2 sm:px-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition sm:text-sm"
                        onClick={() => link(section)}
                    >
                        {section}
                    </button>
                ))}
                <button className="p-4 px-5 sm:p-2 sm:px-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition sm:text-sm">
                    All
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200 hover:shadow-xl transition">
                            <div>
                                <Link href={`/Pages/Product/${item.id}`} className="text-green-600 font-semibold hover:underline">
                                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />

                                </Link>

                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mt-2 text-lg font-medium">${item.price}</p>

                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-red-500 text-lg font-semibold col-span-full">
                        ❌ No products found!
                    </p>
                )}
            </div>
        </div>
    );
};

export default Page;
