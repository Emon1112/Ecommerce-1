'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaShopify, FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

const NavLinks = [
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'Product', path: '/Pages/Product' },
    { id: 2, name: 'About', path: '#About' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
            <Link href="/Pages/Cart" className="hidden md:block">
                <FiShoppingCart className="text-3xl text-red-800" />
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
                    <Link href="/Pages/Cart" onClick={() => setMenuOpen(false)}>
                        <FiShoppingCart className="text-3xl text-white" />
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
