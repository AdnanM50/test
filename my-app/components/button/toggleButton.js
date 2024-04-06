import React, { useState } from 'react'

const ToggleButton = ({ text1, text2, activeTab, setActiveTab }) => {

    return (
        <div>
            <div className="flex my-4 bg-secondary rounded-full w-fit">
                <button
                    className={`rounded-full px-8 py-3 text-white text-lg font-medium ${
                        activeTab == 1 ? "bg-orange-500" : "bg-secondary"
                    }`}
                    onClick={() => setActiveTab(1)}
                >
                    {text1}
                </button>
                <button
                    className={`rounded-full px-8 py-3 text-white text-lg font-medium ${
                        activeTab == 2 ? "bg-orange-500" : "bg-secondary"
                    }`}
                    onClick={() => setActiveTab(2)}
                >
                    {text2}
                </button>
            </div>
        </div>
    );
}

export default ToggleButton;
