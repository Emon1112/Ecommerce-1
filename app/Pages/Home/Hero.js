import React from 'react';
import Image from "next/image";
import hero from "@/public/Hero.png"
import Link from "next/link";

const Hero = () => {
    return (
        <div className="grid grid-cols-2 gap-16 p-16 mt-8">
            <div className="flex flex-col">
                <h1 className="font-serif text-3xl md:text-6xl text-center mx-auto pt-5">Discover the latest trends, unbeatable deals, and exclusive collections—all in one place</h1>
                <Link href="/Pages/Product" className="bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline focus:ring-pink-200  text-white font-semibold py-4 px-9 rounded-full mt-11 mx-auto hover:bg-blue-700 transition-all duration-300">Shop Now</Link>
            </div>
            <Image src={hero} alt="Hero image" className="mx-auto w-full h-full md:h-3/2 md:w-2/3" />
        </div>
    );
};

export default Hero;