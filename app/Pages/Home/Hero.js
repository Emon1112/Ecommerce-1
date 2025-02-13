import React from 'react';
import Image from "next/image";
import hero from "@/public/Hero.png"
import Link from "next/link";

const Hero = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-2/3">
                <h1 className="font-serif text-3xl md:text-6xl text-center mx-auto pt-5">Discover the latest trends, unbeatable deals, and exclusive collections—all in one place</h1>
                <Link href="/Product" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 mx-auto hover:bg-blue-700 transition-all duration-300">Shop Now</Link>
            </div>
            <Image src={hero} alt="Hero image" className="w-1/3" />
        </div>
    );
};

export default Hero;