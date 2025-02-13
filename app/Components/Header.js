import Link from 'next/link';
import React from 'react'
import { FaShopify } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";



const NavLinks = [{ id: 0, name: "Home", path: "/" },
{ id: 1, name: "Product", path: "/Pages/Product" },
{ id: 2, name: "About", path: "#About" },];
const Header = () => {
    return (
        <div>
            <header className="flex flex-row justify-between p-4 bg-slate-300">
                <FaShopify className="font-bold text-3xl text-green-800" />
                <nav className="flex flex-row gap-4">
                    {NavLinks.map((link) => (
                        <li key={link.id} className="list-none">
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </nav>
                <button>
                    <FiShoppingCart className="text-3xl font-bold text-red-800" />

                </button>

            </header>

        </div>
    )
}

export default Header
