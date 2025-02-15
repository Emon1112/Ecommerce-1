'use client'
import { useContext, use } from 'react';
import { ProductContext } from '@/app/Api/ProductContextprovider';
import { CartContext } from '@/app/Api/CartContext';

const PopularProduct = ({ params }) => {
    const { product } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    // ✅ Unwrapping params correctly
    const { id } = use(params);  // Now params is resolved

    // ✅ Convert id to a number
    const item = product.find((p) => p.id === Number(id));

    if (!item) {
        return <div className="text-center text-red-500">Product not found</div>;
    }

    return (
        <div className="p-5">
            <img src={item.image} alt={item.title} className="h-48 mx-auto" />
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p>{item.description}</p>
            <p className="text-xl font-semibold">${item.price}</p>
            <button
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
                onClick={() => addToCart(item)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default PopularProduct;
