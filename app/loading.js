import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                <div className="absolute inset-0 rounded-full bg-green-500"></div>
            </div>
        </div>
    );
};

export default Loading;
