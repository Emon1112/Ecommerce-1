import React from 'react';
import Image from "next/image";
import hero from "@/public/Hero.png"
import Link from "next/link";

const Hero = () => {
    return (
        <div className="grid grid-cols-2 gap-16 p-16 mt-8">
            <div className="">
                <h1 className="font-serif text-3xl md:text-6xl text-center mx-auto pt-5">Discover the latest trends, unbeatable deals, and exclusive collections—all in one place</h1>
                <Link href="/Pages/Product" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 mx-auto hover:bg-blue-700 transition-all duration-300">Shop Now</Link>
            </div>
            <Image src={hero} alt="Hero image" className="mx-auto top-0 right-0" />
        </div>
    );
};

export default Hero;