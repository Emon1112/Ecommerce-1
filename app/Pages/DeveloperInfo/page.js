import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const DeveloperInfo = () => {
    return (
        <div className=" bg-gray-900 text-white p-6 flex flex-col items-center">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-blue-400 mb-4">John Doe</h1>
                <p className="text-lg text-gray-300">Full Stack Developer | React & Node.js Enthusiast</p>
            </div>

            <div className="mt-8 w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "GraphQL",
                        "Tailwind CSS", "TypeScript", "Redux", "Docker", "Firebase", "AWS"
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md text-center"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-8 w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">Projects</h2>
                <ul className="space-y-4">
                    <li className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white">E-commerce Platform</h3>
                        <p className="text-gray-300">A full-stack MERN e-commerce website with payment integration.</p>
                    </li>
                    <li className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white">Portfolio Website</h3>
                        <p className="text-gray-300">A personal portfolio built using Next.js and Tailwind CSS.</p>
                    </li>
                </ul>
            </div>

            <div className="mt-8 w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">Contact Me</h2>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/johndoe" className="text-blue-400 text-2xl hover:text-blue-300">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/johndoe" className="text-blue-400 text-2xl hover:text-blue-300">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:johndoe@example.com" className="text-blue-400 text-2xl hover:text-blue-300">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DeveloperInfo;
