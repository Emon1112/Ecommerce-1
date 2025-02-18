'use client'
import { useContext, use } from 'react';
import { ProductContext } from '@/app/Api/ProductContextprovider';
import { CartContext } from '@/app/Api/CartContext';

const PopularProduct = ({ params }) => {
    const { product } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const { id } = use(params);  // Resolving params correctly
    const item = product.find((p) => p.id === Number(id));

    if (!item) {
        return <div className="text-center text-red-500 text-lg font-semibold mt-10">⚠️ Product not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Product Image */}
                <div className="flex justify-center items-center bg-gray-100 p-5">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-60 md:h-72 rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                    <p className="text-2xl font-semibold text-green-600 mt-3">${item.price}</p>

                    <button
                        className="mt-5 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
                        onClick={() => addToCart(item)}
                    >
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;
