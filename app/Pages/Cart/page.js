"use client";

import { CartContext } from "@/app/Api/CartContext";
import { useContext, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Cart() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice, clearCart } = useContext(CartContext);

    useEffect(() => {
        console.log("Cart contents:", cart);
    }, [cart]);

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg min-h-screen mt-14">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Your Shopping Cart</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Your cart is empty. Start adding items!</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((product) => (
                        <div key={product.id} className="flex items-center justify-between border p-4 rounded-lg shadow-sm">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                                <p className="text-gray-600">${product.price.toFixed(2)} x {product.quantity}</p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => decreaseQuantity(product.id)}
                                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                                    aria-label="Decrease quantity"
                                >
                                    <FaMinus className="text-gray-700" />
                                </button>

                                <span className="text-lg font-semibold">{product.quantity}</span>

                                <button
                                    onClick={() => increaseQuantity(product.id)}
                                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                    aria-label="Increase quantity"
                                >
                                    <FaPlus />
                                </button>

                                <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                                    aria-label="Remove item"
                                >
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="mt-6 text-right">
                        <h2 className="text-xl font-bold text-gray-800">Total: ${getTotalPrice().toFixed(2)}</h2>
                    </div>

                    <button
                        onClick={clearCart}
                        className="w-full py-3 mt-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
                    >
                        🧹 Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
}
