'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaShopify, FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from 'react';
import { CartContext } from '@/app/Api/CartContext';

const NavLinks = [
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'Product', path: '/Pages/Product' },
    { id: 2, name: 'About', path: '/Pages/Aboutpage' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(CartContext);
    const totalCartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="flex justify-between items-center p-4  bg-slate-300 fixed w-full top-0 bg-opacity-10">
            {/* Logo */}
            <FaShopify className="text-3xl text-green-800" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
                {NavLinks.map((link) => (
                    <Link key={link.id} href={link.path} className="hover:text-blue-600">
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Cart Icon */}
            <Link href="/Pages/Cart" onClick={() => setMenuOpen(false)} className="relative">
                <FiShoppingCart className="text-3xl text-red" />
                {totalCartQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {totalCartQuantity}
                    </span>
                )}
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden z-30" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? null : <FaBars className="text-3xl" />}
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center gap-6 text-white text-xl z-20">
                    <button className="absolute top-4 right-4 text-3xl" onClick={() => setMenuOpen(false)}>
                        <FaTimes />
                    </button>
                    {NavLinks.map((link) => (
                        <Link key={link.id} href={link.path} onClick={() => setMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/Pages/Cart" onClick={() => setMenuOpen(false)} className="relative">
                        <FiShoppingCart className="text-3xl text-white" />
                        {totalCartQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {totalCartQuantity}
                            </span>
                        )}

                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;