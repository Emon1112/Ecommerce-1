"use client"
import React from 'react'
import { useReducer } from 'react/cjs/react.production'
import { CartContext } from '../Api/CartContext';

const initialState = {
  cart: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };


    default:
      return state;
  }

}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });


  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider