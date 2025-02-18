'use client';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { FaShopify, FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '@/app/Api/CartContext';
import { useRouter } from 'next/navigation';

const NavLinks = [
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'Product', path: '/Pages/Product' },
    { id: 2, name: 'About', path: '/Pages/Aboutpage' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(CartContext);
    const router = useRouter();
    const totalCartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="flex justify-between items-center p-4 bg-slate-300 fixed w-full top-0 bg-opacity-10 z-50">
            {/* Logo */}
            <FaShopify className="text-3xl text-green-800 cursor-pointer" onClick={() => router.push('/')} />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
                {NavLinks.map((link) => (
                    <Link key={link.id} href={link.path} className="hover:text-blue-600">
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Cart Icon - Only for Desktop */}
            <div onClick={() => router.push('/Pages/Cart')} className="relative cursor-pointer hidden md:block">
                <FiShoppingCart className="text-3xl text-red-500" />
                {totalCartQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {totalCartQuantity}
                    </span>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden z-30" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes className="text-3xl text-white" /> : <FaBars className="text-3xl" />}
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center gap-6 text-white text-xl z-20">
                    {NavLinks.map((link) => (
                        <Link key={link.id} href={link.path} className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                    {/* Cart Icon - Only in Mobile Menu */}
                    <div onClick={() => { router.push('/Pages/Cart'); setMenuOpen(false); }} className="relative cursor-pointer">
                        <FiShoppingCart className="text-3xl text-white" />
                        {totalCartQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {totalCartQuantity}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
