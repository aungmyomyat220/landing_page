'use client'
import React, { useEffect, useState } from 'react';

const bannerData = [
    "Banner1",
    "Banner2",
    "Banner3",
];

const Page = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    const nextBanner = () => {
        setCurrentBannerIndex((currentBannerIndex + 1) % bannerData.length);
    };

    useEffect(() => {
        const interval = setInterval(nextBanner, 3000);
        return () => clearInterval(interval);
    }, [currentBannerIndex]);

    const handleRadioChange = ({index}: { index: any }) => {
        setCurrentBannerIndex(index);
    };

    return (
        <div className="mt-10 flex flex-col justify-center bg-gray-400 sm:mx-20 mx-5">
            <div id="text-carousel" className="relative w-full h-56 rounded-lg flex justify-center items-center text-white text-2xl">
                {bannerData[currentBannerIndex]}
            </div>
            <div className="radio-buttons flex justify-center pb-5">
                {bannerData.map((_, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            name="bannerRadio"
                            value={index}
                            checked={currentBannerIndex === index}
                            onChange={() => handleRadioChange({index: index})}
                        />
                        <span className="radio-custom mr-2"></span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Page;

