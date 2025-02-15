"use client";

import { CartContext } from "@/app/Api/CartContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Cart() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice, clearCart } = useContext(CartContext);
    useEffect(() => {
        console.log("Cart contents:", cart);
    }, [cart]);


    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product.id} className="border p-4 rounded-md mb-2">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-gray-700">${product.price}</p>
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Remove
                            </button>
                            <p>{product.title} - ${product.price} x {product.quantity}</p>
                            <button onClick={() => increaseQuantity(product.id)}>+</button>
                            <button onClick={() => decreaseQuantity(product.id)}>-</button>
                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                            <h2>Total Price: ${getTotalPrice()}</h2>


                        </div>
                    ))}
                    <button
                        onClick={clearCart}
                        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
}
