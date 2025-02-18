import Image from "next/image";
import React from "react";
import aboutimage from "@/public/teamwork-and-team-building.png";

const AboutUs = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white min-h-screen">
            <div className="md:w-1/2 text-left">
                <h2 className="text-2xl font-bold text-green-700">About Us</h2>
                <p className="mt-4 text-gray-600 text-3xl font-serif">
                    Dummy Group is a family of brands and businesses, making it possible for
                    customers around the world to express themselves through fashion and design,
                    and to choose a more sustainable lifestyle. We create value for people and
                    society in general by delivering our customer offering and by developing
                    with a focus on sustainable and profitable growth.
                </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <Image
                    src={aboutimage}
                    alt="Fashion models in sustainable outfits"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default AboutUs;
